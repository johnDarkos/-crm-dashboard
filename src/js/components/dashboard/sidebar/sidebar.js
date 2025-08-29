import './sidebar.css';
import { appState } from '../../../storage/stateApp';
import { dashboardContentManager } from '../../../router/pages/userpage/userPageTemplate.js';
import { profile } from '../../../router/pages/profile/profile.js';

const { user } = appState;

// Функция для обработки навигационных действий
const handleNavigationAction = (action, navElement = null) => {
    switch (action) {
        case 'dashboard':
            dashboardContentManager.setContent(`
                <div class="dashboard-welcome">
                    <h2>Добро пожаловать в CRM систему</h2>
                    <p>Выберите раздел в меню для начала работы</p>
                </div>
            `, 'dashboard');
            break;

        case 'profile':
            const profileContent = profile();
            dashboardContentManager.setContent(profileContent, 'profile');
            break;

        case 'clients':
            dashboardContentManager.setContent(`
                <div class="dashboard-section">
                    <h2>Управление клиентами</h2>
                    <p>Здесь будет функционал для работы с клиентами</p>
                </div>
            `, 'clients');
            break;

        case 'analytics':
            dashboardContentManager.setContent(`
                <div class="dashboard-section">
                    <h2>Аналитика</h2>
                    <p>Здесь будет аналитика и отчеты</p>
                </div>
            `, 'analytics');
            break;

        case 'settings':
            dashboardContentManager.setContent(`
                <div class="dashboard-section">
                    <h2>Настройки</h2>
                    <p>Здесь будут настройки системы</p>
                </div>
            `, 'settings');
            break;

        case 'help':
            dashboardContentManager.setContent(`
                <div class="dashboard-section">
                    <h2>Справка</h2>
                    <p>Здесь будет справочная информация</p>
                </div>
            `, 'help');
            break;

        default:
            console.log(`Неизвестное действие: ${action}`);
    }

    // Синхронизируем активные состояния после изменения контента
    if (navElement) {
        setTimeout(() => {
            const currentView = dashboardContentManager.getCurrentView();
            navElement.querySelectorAll('.nav-item').forEach(item => {
                const itemAction = item.getAttribute('data-action');
                if (itemAction === currentView) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }, 0);
    }
};

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
        { text: '📊 Дашборд', href: '#/userPage', active: true, action: 'dashboard' },
        { text: '👥 Клиенты', href: '#', active: false, action: 'clients' },
        { text: '📈 Аналитика', href: '#', active: false, action: 'analytics' },
        { text: '❓ Помощь', href: '#', active: false, action: 'help' },
    ];
    const navFrag = document.createDocumentFragment();
    links.forEach(({ text, href, active, action }) => {
        const a = document.createElement('a');
        a.href = href;
        a.classList.add('nav-item');
        a.setAttribute('data-action', action);

        // Устанавливаем активное состояние на основе текущего состояния dashboardContentManager
        const currentView = dashboardContentManager.getCurrentView();
        if (currentView === action) {
            a.classList.add('active');
        } else if (active && currentView === 'dashboard') {
            // Если это первый элемент и мы в dashboard режиме, делаем его активным
            a.classList.add('active');
        }

        a.textContent = text;

        // Добавляем обработчик клика для внутренних действий
        a.addEventListener('click', (e) => {
            e.preventDefault();

            // Убираем активный класс у всех ссылок в навигации
            nav.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

            // Добавляем активный класс текущей ссылке
            a.classList.add('active');

            // Обрабатываем действие
            handleNavigationAction(action, nav);
        });

        navFrag.append(a);
    });
    nav.append(navFrag);

    const profile = document.createElement('div');
    profile.classList.add('sidebar-user-profile');
    const avatar = document.createElement('div');
    avatar.classList.add('user-avatar');
    avatar.textContent = '👤';
    const info = document.createElement('div');
    info.classList.add('user-info');
    const name = document.createElement('div');
    name.classList.add('user-name');
    name.textContent = `${user?.name || 'Пользователь'}`;
    const role = document.createElement('div');
    role.classList.add('user-role');
    role.textContent = user?.role || 'гость';
    info.append(name, role);
    const logout = document.createElement('a');
    logout.href = '#';
    logout.classList.add('logout-btn');
    logout.textContent = '🚪';

    profile.append(avatar, info, logout);
    aside.append(logo, nav, profile);
    container.append(aside);

    // Инициализируем активное состояние после добавления в DOM
    setTimeout(() => {
        const currentView = dashboardContentManager.getCurrentView();
        nav.querySelectorAll('.nav-item').forEach(item => {
            const itemAction = item.getAttribute('data-action');
            if (itemAction === currentView) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }, 0);

    return container;
}