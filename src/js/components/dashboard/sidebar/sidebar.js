import './sidebar.css';
import { appState } from '../../../storage/stateApp';

export const sidebar = () => {
    const container = document.createElement('div');
    container.classList.add('dashboard-container');

    const aside = document.createElement('aside');
    aside.classList.add('sidebar');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = '📊 CRM';

    const nav = document.createElement('nav');
    nav.classList.add('nav-menu');
    const links = [
        { text: '📊 Дашборд', href: '#', active: true },
        { text: '👥 Клиенты', href: '#'},
        { text: '📈 Аналитика', href: '#'},
        { text: '⚙️ Настройки', href: '#'},
        { text: '❓ Помощь', href: '#'},
    ];
    const navFrag = document.createDocumentFragment();
    links.forEach(({ text, href, active }) => {
        const a = document.createElement('a');
        a.href = href;
        a.classList.add('nav-item');
        if (active) a.classList.add('active');
        a.textContent = text;
        navFrag.append(a);
    });
    nav.append(navFrag);

    const profile = document.createElement('div');
    profile.classList.add('user-profile');
    const avatar = document.createElement('div');
    avatar.classList.add('user-avatar');
    avatar.textContent = '👤';
    const info = document.createElement('div');
    info.classList.add('user-info');
    const name = document.createElement('div');
    name.classList.add('user-name');
    name.textContent = `${appState.user?.name || 'Пользователь'}`;
    const role = document.createElement('div');
    role.classList.add('user-role');
    role.textContent = 'Администратор';
    info.append(name, role);
    const logout = document.createElement('a');
    logout.href = '#';
    logout.classList.add('logout-btn');
    logout.textContent = '🚪';

    profile.append(avatar, info, logout);
    aside.append(logo, nav, profile);
    container.append(aside);
    return container;
}