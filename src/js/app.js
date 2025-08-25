
import { initRouter } from './router/router.js';
import { initHeader } from './components/header/header';


const app = () => {
    window.addEventListener('load', () => {
        initHeader();
        initRouter();
    });

}


app();