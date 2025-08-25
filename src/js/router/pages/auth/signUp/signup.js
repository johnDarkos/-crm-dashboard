import { signUpTemplate } from "./signUpTemplate.js";
import { initSignUpForm } from "./initSignUpForm.js"

const onSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    event.target.reset();
}


export const signup = () => {
    return {
        html: signUpTemplate,
        init: () => {
            const form = document.querySelector('.register-form');
            initSignUpForm(form, onSubmit);
        }
    };
}