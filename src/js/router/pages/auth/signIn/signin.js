import { createSignInView } from './signInTemplate.js';
import { initSignIn } from './initSignForm.js';
import { setSession } from '../../../../services/localStorage/authService.js';
import { hashPassword } from "../../../../utils/hashPassword.js";

const onSubmit = (e) => {
    e.preventDefault();


    try {
        const data = localStorage.getItem('crmAppState');

        if (!data) {
            alert('Пользователь не найден. Пожалуйста, зарегистрируйтесь.');
            window.location.hash = '#/register';
            return;
        }

        const parsedData = JSON.parse(data);
        const { user } = parsedData;

        if (!user || !user.email) {
            alert('Пользователь не найден. Пожалуйста, зарегистрируйтесь.');
            window.location.hash = '#/register';
            return;
        }

        const inputEmail = e.target.email.value;
        const inputPassword = e.target.password.value;

        // Проверяем email и пароль
        if (user.email !== inputEmail) {
            alert('Неверный email или пароль');
            return;
        }

        const hashedInputPassword = hashPassword(inputPassword);
        if (user.password !== hashedInputPassword) {
            alert('Неверный email или пароль');
            return;
        }

        // Успешная авторизация
        e.target.reset();
        setSession({ email: inputEmail });
        window.location.hash = '#/userPage';

    } catch (error) {
        console.error('Ошибка при авторизации:', error);
        alert('Произошла ошибка при авторизации. Попробуйте еще раз.');
    }
}

export const signin = () => {
    const node = createSignInView();
    return {
        node,
        init: () => {
            const form = document.querySelector('.login-form');
            initSignIn(form, onSubmit);
        }
    };
}