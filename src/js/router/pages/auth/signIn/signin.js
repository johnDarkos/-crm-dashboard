import { signTemplate } from './signinTemplate.js';
import { initSignIn } from './initSignForm.js';

const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    e.target.reset();
}

export const signin = () => {
    return {
        html: signTemplate,
        init: () => {
            const form = document.querySelector('.login-form');
            initSignIn(form, onSubmit);
        }
    };
}