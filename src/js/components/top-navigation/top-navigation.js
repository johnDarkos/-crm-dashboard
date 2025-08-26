import './top-navigation.css';
import '../buttons/btn-auth.css';
import { authButtons } from '../buttons/btn-auth.js';

const auth = () => {
  return authButtons();
}

export const navigation = (...list) => {
    if (list.length === 0) return document.createDocumentFragment();

    const container = document.createElement('div');
    container.classList.add('header-container');

    const ul = document.createElement('ul');
    ul.classList.add('nav-list');

    const fragment = document.createDocumentFragment();
    list.forEach(htmlItem => {
        // Поддержка текущего интерфейса: элементы приходят как HTML-строки <li>
        if (typeof htmlItem === 'string') {
            const temp = document.createElement('div');
            temp.innerHTML = htmlItem;
            const li = temp.firstElementChild;
            if (li) fragment.append(li);
        } else if (htmlItem instanceof HTMLElement) {
            fragment.append(htmlItem);
        }
    });

    ul.append(fragment);
    container.append(ul, auth());

    return container;
};