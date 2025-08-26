import { homePage } from "./pages/home/homepage.js"
import { aboutPage } from "./pages/about/about.js"
import { signup } from "./pages/auth/signUp/signup.js"
import { signin } from "./pages/auth/signIn/signin.js"
import { userPage } from "./pages/userpage/userPage.js"
import { initHeader } from "../components/header/header.js"
import { isAuthenticated } from "../services/localStorage/authService.js"

const router = {
    home: () => homePage(),
    about: () => aboutPage(),
    docs: () => {
        return {
            html: `<h1>Docs</h1>`,
            init: null
        }
    },
    userPage: () => userPage(),
    register: () => signup(),
    login: () => signin(),
    404: () => {
        return {
            html: `<h1 style="color: red; text-align: center; margin-top: 100px">PAGE NOT FOUND!</h1>`,
            init: null
        }
    }
}

const renderRoute = () => {
    const path = window.location.hash.slice(2);
    console.log(path);
    
    if (!path) {
        return 'home';
    }
    
    return router[path] ? path : '404';
}

const handlechangeRoute = (path) => {
  const isPrivate = path === 'userPage';
  if (isPrivate && !isAuthenticated()) {
    window.location.hash = '#/login';
    return router['login']();
  }
  return router[path] ? router[path]() : router['404']();
};

export const initRouter = () => {
    const updateContent = () => {
        const routeName = renderRoute();
        console.log(routeName);
        const app = document.getElementById('app');
        
        if (app) {
            const routeResult = handlechangeRoute(routeName);
            
            // Поддержка вариантов результата маршрута:
            // 1) { html, init }
            // 2) { node, init }
            // 3) DOM Node
            // 4) строка (html)
            if (routeResult && typeof routeResult === 'object' && 'html' in routeResult) {
                app.innerHTML = routeResult.html;
                if (typeof routeResult.init === 'function') {
                    routeResult.init();
                }
            } else if (routeResult && typeof routeResult === 'object' && 'node' in routeResult) {
                app.replaceChildren();
                if (routeResult.node instanceof Node) {
                    app.append(routeResult.node);
                }
                if (typeof routeResult.init === 'function') {
                    routeResult.init();
                }
            } else if (routeResult instanceof Node) {
                app.replaceChildren();
                app.append(routeResult);
            } else {
                app.innerHTML = routeResult;
            }

            // Управление видимостью основного header
            if (routeName === 'userPage') {
                const existingHeader = document.querySelector('header.header');
                if (existingHeader) existingHeader.remove();
            } else {
                // Идемпотентно создаем header, если его удалили ранее
                initHeader();
            }
        } else {
            console.error('Элемент #app не найден');
        }
    };
    
    window.addEventListener('load', updateContent);
    window.addEventListener('hashchange', updateContent);
    updateContent();
}