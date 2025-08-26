import { sidebar as sidebarComponent } from "../../../components/dashboard/sidebar/sidebar.js";
import { dashboardHeader } from "../../../components/dashboard/header/header-dashboard.js";


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

    const fragment = document.createDocumentFragment();
    fragment.append(container, main);
    return fragment;
};





