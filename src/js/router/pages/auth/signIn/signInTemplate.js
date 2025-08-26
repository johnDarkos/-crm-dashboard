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

// export const signTemplate = `
//     <div class="form-container">
//         <div class="form-wrapper">
//             <div class="form-header">
//                 <h1>Вход</h1>
//             </div>
//             <form class="login-form" id="loginForm">
//                 <div class="form-group">
//                     <input type="email" name="email" placeholder="Email" autocomplete="username" required>
//                 </div>
//                 <div class="form-group">
//                     <input type="password" name="password" placeholder="Пароль" autocomplete="current-password" required>
//                 </div>
//                 <div class="form-options">
//                     <label class="checkbox-label">
//                         <input type="checkbox" id="remember" name="remember">
//                         <span class="checkmark"></span>
//                         <span class="remember-text">Запомнить меня</span>
//                     </label>
//                     <a href="#" class="forgot-link">Забыли пароль?</a>
//                 </div>
//                 <div class="form-group">
//                     <button type="submit" class="submit-btn">Войти</button>
//                 </div>
//             </form>
//             <div class="form-footer">
//                 <p>Нет аккаунта? <a href="#" class="link">Создать аккаунт</a></p>
//             </div>
//         </div>
//     </div>
// `;
