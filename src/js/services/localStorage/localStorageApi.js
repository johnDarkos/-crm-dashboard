

export const setLocalStorage = (email, password) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}

export const getLocalStorage = () => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    return { email, password };
}

export const removeLocalStorage = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
}

