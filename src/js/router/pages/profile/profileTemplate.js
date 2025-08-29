import { stateApp } from "../../../storage/stateApp.js";


export const createUserProfile = () => {
    // Получаем пользователя из состояния приложения
    const user = stateApp.getUser ? stateApp.getUser() : null;

    const container = document.createElement('div');
    container.className = 'user-profile';

    if (!user) {
        container.innerHTML = `
            <h2>Профиль пользователя</h2>
            <p>Нет данных о пользователе. Пожалуйста, войдите в систему.</p>
        `;
        return container;
    }

    // Аватар
    const avatar = document.createElement('div');
    avatar.className = 'user-profile__avatar';
    if (user.avatar) {
        const img = document.createElement('img');
        img.src = user.avatar;
        img.alt = 'Аватар пользователя';
        avatar.appendChild(img);
    } else {
        avatar.textContent = '👤';
    }

    // Имя пользователя
    const name = document.createElement('div');
    name.className = 'user-profile__name';
    name.textContent = user.name || 'Без имени';

    // Email
    const email = document.createElement('div');
    email.className = 'user-profile__email';
    email.textContent = user.email || 'Нет email';

    // Роль
    const role = document.createElement('div');
    role.className = 'user-profile__role';
    role.textContent = `Роль: ${user.role || 'Не указано'}`;

    // Последний вход
    const lastLogin = document.createElement('div');
    lastLogin.className = 'user-profile__last-login';
    if (user.lastLogin) {
        const date = new Date(user.lastLogin);
        lastLogin.textContent = `Последний вход: ${date.toLocaleString()}`;
    } else {
        lastLogin.textContent = 'Последний вход: Нет данных';
    }

    // Права (permissions)
    const permissions = document.createElement('div');
    permissions.className = 'user-profile__permissions';
    if (user.permissions && user.permissions.length > 0) {
        permissions.innerHTML = `<strong>Права:</strong> <ul>${user.permissions.map(p => `<li>${p}</li>`).join('')}</ul>`;
    } else {
        permissions.innerHTML = `<strong>Права:</strong> Нет`;
    }

    // Создаем контейнер для информации
    const infoContainer = document.createElement('div');
    infoContainer.className = 'user-profile__info';
    
    infoContainer.appendChild(name);
    infoContainer.appendChild(email);
    infoContainer.appendChild(role);
    infoContainer.appendChild(lastLogin);
    infoContainer.appendChild(permissions);
    
    container.appendChild(avatar);
    container.appendChild(infoContainer);

    return container;
};