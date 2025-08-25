import { homePage } from "./pages/home/homepage.js"
import { aboutPage } from "./pages/about/about.js"
import { signup } from "./pages/auth/signUp/signup.js"
import { signin } from "./pages/auth/signIn/signin.js"

const router = {
    home: () => homePage(),
    about: () => aboutPage(),
    docs: () => {
        return {
            html: `<h1>Docs</h1>`,
            init: null
        }
    },
    userpage: () => {
        return {
            html: `<h1>Userpage</h1>`,
            init: null
        }
    },
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
    return router[path] ? router[path]() : router['404']();
}

export const initRouter = () => {
    const updateContent = () => {
        const routeName = renderRoute();
        console.log(routeName);
        const app = document.getElementById('app');
        
        if (app) {
            const routeResult = handlechangeRoute(routeName);
            
            // Если результат - объект с html и init
            if (typeof routeResult === 'object' && routeResult.html) {
                app.innerHTML = routeResult.html;
                // Вызываем функцию инициализации если она есть
                if (routeResult.init) {
                    routeResult.init();
                }
            } else {
                // Обратная совместимость - если возвращается просто строка
                app.innerHTML = routeResult;
            }
        } else {
            console.error('Элемент #app не найден');
        }
    };
    
    window.addEventListener('load', updateContent);
    window.addEventListener('hashchange', updateContent);
    updateContent();
}