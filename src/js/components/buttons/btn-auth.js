export const authButtons = () => {
    const container = document.createElement('div');
    container.classList.add('auth-buttons');

    const loginBtn = document.createElement('button');
    loginBtn.classList.add('login_in_btn');
    loginBtn.dataset.route = 'login';
    loginBtn.textContent = 'Log in';

    const signupBtn = document.createElement('button');
    signupBtn.classList.add('signup_btn');
    signupBtn.dataset.route = 'register';
    signupBtn.textContent = 'Sign up';

    container.append(loginBtn, signupBtn);
    return container;
};