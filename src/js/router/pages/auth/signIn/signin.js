import { createSignInView } from './signInTemplate.js';
import { initSignIn } from './initSignForm.js';
import { getLocalStorage } from '../../../../services/localStorage/localStorageApi.js';
import { isAuthenticated, clearSession, setSession} from '../../../../services/localStorage/authService.js';

const onSubmit = (e) => {
    e.preventDefault();

    const { email } = getLocalStorage();

    console.log(email)
    
   if(email !== e.target.email.value) {
        alert('Неверный логин или пароль');
        window.location.hash = '#/login';
        return;
    }

    e.target.reset();
    setSession({email: e.target.email.value})
    window.location.hash = '#/userPage';
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