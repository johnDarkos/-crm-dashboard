import './signin.css';
import { form } from '../../../../components/forms/form';

export const createSignInView = () => {
    const signInForm = form([
        `<div class="form-group">
            <input type="email" name="email" placeholder="Email" autocomplete="username" required>
        </div>`,
        `<div class="form-group">
            <input type="password" name="password" placeholder="Пароль" autocomplete="current-password" required>
        </div>`,
        `<div class="form-group">
            <button type="submit" class="submit-btn">Войти</button>
        </div>`,
    ], 'login-form');

    const container = document.createElement('div');
    container.classList.add('form-container');

    const wrapper = document.createElement('div');
    wrapper.classList.add('form-wrapper');

    const header = document.createElement('div');
    header.classList.add('form-header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Вход';
    header.append(h1);

    const footer = document.createElement('div');
    footer.classList.add('form-footer');
    const p = document.createElement('p');
    p.innerHTML = 'Нет аккаунта? <a href="#/register" class="link">Зарегистрироваться</a>';
    footer.append(p);

    wrapper.append(header, signInForm, footer);
    container.append(wrapper);
    return container;
};

