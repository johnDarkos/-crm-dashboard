import { navigation } from '../top-navigation/top-navigation.js';
import './header.css';

const listItem = ['home', 'about', 'docs'].map(item => {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    li.dataset.route = item;
    li.textContent = item;
    return li;
});

// Только создаем и возвращаем HTML-строку
export const header = () => {
    const headerElement = document.createElement('header');
    headerElement.className = 'header';
    const nav = navigation(...listItem);
    headerElement.append(nav);
    return headerElement;
};

// Инициализация header с обработчиками (вызывается 1 раз)
export const initHeader = () => {
    // Проверяем, существует ли уже header
    if (document.querySelector('header.header')) {
        console.log('Header already exists');
        return;
    }

    const headerElement = header();
    
    const ul = headerElement.querySelector('.nav-list');
    const auth = headerElement.querySelector('.auth-buttons');

    if(!ul || !auth) {
        console.error('Header elements not found');
        return;
    }
        
    ul.addEventListener('click', (e) => {
            const target = e.target.closest('.nav-item');
            if (target) {
                const route = target.dataset.route;
                console.log('Navigating to:', route);
                window.location.hash = `#/${route}`;
            }
        });
    
    auth.addEventListener('click', (e) => {
        const target = e.target.closest('button');
        if (target) {
            const route = target.dataset.route;
            console.log('Navigating to:', route);
            window.location.hash = `#/${route}`;
        }
    });
    

    document.body.prepend(headerElement);
    
};