


export const initSignUpForm = (form, onSubmit) => {
    if (!form) {
        console.error('Форма не найдена');
        return;
    }

    form.addEventListener('submit', onSubmit);
}