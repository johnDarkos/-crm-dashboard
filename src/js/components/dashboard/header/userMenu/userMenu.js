import { clearSession } from "../../../../services/localStorage/authService";
import { actions as stateActions } from "../../../../storage/stateApp.js";

export const createUserMenu = (items) => {
    const { clearUser } = stateActions;
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('user__menu');

    // Иконка-триггер
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.classList.add('user__menu_trigger');
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.textContent = '👤';

    const ul = document.createElement('ul');
    ul.classList.add('user__menu__wrapper');
    ul.hidden = true;

    // Карта действий по ключу
    const actions = {
        профиль: () => console.log('Открыть профиль'),
        настройки: () => console.log('Открыть настройки'),
        выход: () => {
            clearSession();
            clearUser();
            window.location.hash = '#/home';
        }
    };

    const fragment = document.createDocumentFragment();

    items.forEach(text => {
        const li = document.createElement('li');
        li.classList.add('user__menu_item');
        li.textContent = text;
        li.dataset.menu = text;

        li.addEventListener('click', () => {
            const action = actions[text];
            if (action) {
                action();
            } else {
                console.warn(`Нет действия для пункта: ${text}`);
            }
        });

        fragment.append(li);
    });

    ul.append(fragment);
    // Тогглинг
    const toggle = () => {
        const isHidden = ul.hidden;
        ul.hidden = !isHidden;
        trigger.setAttribute('aria-expanded', String(!isHidden));
    };
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggle();
    });
    // Закрытие по клику вне
    document.addEventListener('click', (e) => {
        if (!menuContainer.contains(e.target)) {
            ul.hidden = true;
            trigger.setAttribute('aria-expanded', 'false');
        }
    });

    menuContainer.append(trigger, ul);
    return menuContainer;
};


