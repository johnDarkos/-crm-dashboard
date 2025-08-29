
export const initSignIn = (form, onSubmit) => {
    if (!form) {
        console.error('Форма не найдена');
        return;
    }

    form.addEventListener('submit', onSubmit);
    
    // Обработчик кликов по ссылкам
    setTimeout(() => {
        const link = document.querySelector('.form-footer .link');
        if (link) {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                window.location.hash = '#/register';
            });
        }
    }, 0);
};
