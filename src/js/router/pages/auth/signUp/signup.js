import { createSignUpView } from "./signUpTemplate.js";
import { initSignUpForm } from "./initSignUpForm.js"
import { hashPassword } from "../../../../utils/hashPassword.js";
import { setSession, getSession } from "../../../../services/localStorage/authService.js";
import { actions } from "../../../../storage/stateApp.js";
import { User } from "../../../../models/user.js";

// Обработчик клика по ссылке "Войти"
const onClickLink = (event) => {
    event.preventDefault()
    window.location.hash = '#/login';
}

const onClickTermsLink = (event) => {
    event.preventDefault();
    window.location.hash = '#/terms';
}

const onSubmit = (event) => {
    event.preventDefault();

    const session = getSession();

    if(session){
        if(session.email === event.target.email.value){
            alert('Вы уже зарегистрированы');
            return;
        }
    }

    const user = new User({
        email: event.target.email.value,
        name: event.target.fullName.value,
        password: hashPassword(event.target.password.value), // Сохраняем хэш пароля
        avatar: null,
        lastLogin: new Date(),
        role: 'Пользователь',
        permissions: []
    })

    actions.setUser(user);

    setSession({ email: event.target.email.value });
    event.target.reset();
    window.location.hash = '#/userPage';
}

export const signup = () => {
    const node = createSignUpView();
    return {
        node,
        init: () => {
            const form = document.querySelector('.register-form');
            initSignUpForm(form, onSubmit, onClickLink, onClickTermsLink);
        }
    };
}