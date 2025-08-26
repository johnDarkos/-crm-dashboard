import { createSignUpView } from "./signUpTemplate.js";
import { initSignUpForm } from "./initSignUpForm.js"
import { getLocalStorage } from "../../../../services/localStorage/localStorageApi.js";
import { setSession } from "../../../../services/localStorage/authService.js";
import { actions } from "../../../../storage/stateApp.js";
import { User } from "../../../../models/user.js";

const onSubmit = (event) => {
    event.preventDefault();
    const { email } = getLocalStorage();

    if (email === event.target.email.value) {
        alert('Вы уже зарегистрированы');
        return;
    }

    const user = new User({
        email: event.target.email.value,
        name: event.target.fullName.value,
        avatar: null,
        lastLogin: new Date(),
        role: 'user',
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
            initSignUpForm(form, onSubmit);
        }
    };
}