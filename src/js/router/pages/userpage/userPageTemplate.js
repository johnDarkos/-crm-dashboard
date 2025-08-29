import { sidebar as sidebarComponent } from "../../../components/dashboard/sidebar/sidebar.js";
import { dashboardHeader } from "../../../components/dashboard/header/header-dashboard.js";

// Глобальный объект для управления контентом дашборда
export const dashboardContentManager = {
    mainContent: null,
    currentView: 'dashboard',

    setContent(content, viewName = 'custom') {
        this.currentView = viewName;
        if (this.mainContent) {
            // Очищаем текущее содержимое
            this.mainContent.innerHTML = '';

            // Добавляем новый контент
            if (content instanceof Node) {
                this.mainContent.appendChild(content);
            } else if (typeof content === 'string') {
                this.mainContent.innerHTML = content;
            } else if (content.node) {
                this.mainContent.appendChild(content.node);
            }
        }
    },

    getCurrentView() {
        return this.currentView;
    }
};

export const userPageTemplate = () => {
    const sidebarNode = sidebarComponent();
    const headerNode = dashboardHeader();

    const existingHeader = document.querySelector('.header');
    if (existingHeader) {
        existingHeader.remove();
    }

    const container = document.createElement('div');
    container.classList.add('dashboard-container');
    container.append(sidebarNode);

    const main = document.createElement('main');
    main.classList.add('dashboard-content');
    main.append(headerNode);

    // Создаем область для основного контента
    const contentArea = document.createElement('div');
    contentArea.classList.add('dashboard-main-content');
    contentArea.innerHTML = `
        <div class="dashboard-welcome">
            <h2>Добро пожаловать в CRM систему</h2>
            <p>Выберите раздел в меню для начала работы</p>
        </div>
    `;
    main.append(contentArea);

    // Сохраняем ссылку на область контента для менеджера
    dashboardContentManager.mainContent = contentArea;

    const fragment = document.createDocumentFragment();
    fragment.append(container, main);
    return fragment;
};





