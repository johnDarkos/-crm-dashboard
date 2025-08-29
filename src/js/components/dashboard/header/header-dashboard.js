import './header-dashboard.css';
import { createUserMenu } from './userMenu/userMenu';
import { appState } from '../../../storage/stateApp.js';

const { user } = appState;

export const dashboardHeader = () => {
    const header = document.createElement('header');
    header.classList.add('dasboard-header');

    const left = document.createElement('div');
    left.classList.add('dasboard-header-left');
    const welcome = document.createElement('p');
    welcome.textContent = `Добро пожаловать, ${user?.name || 'Пользователь'}!`;
    left.append(welcome);

    const right = document.createElement('div');
    right.classList.add('dasboard-header-right');

    const search = document.createElement('div');
    search.classList.add('search-box');
    const icon = document.createElement('span');
    icon.classList.add('search-icon');
    icon.textContent = '🔍';
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Поиск...';
    search.append(icon, input);

    const notifications = document.createElement('div');
    notifications.classList.add('notifications');
    notifications.textContent = '🔔';

    const menuItems = ['профиль', 'настройки', 'выход'];
    const userMenu = createUserMenu(menuItems);

    right.append(search, notifications, userMenu);
    header.append(left, right);
    return header;
}