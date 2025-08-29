


export const initSignUpForm = (form, onSubmit, onClickLink, onClickTermsLink) => {
    if (!form) {
        console.error('Форма не найдена');
        return;
    }

    form.addEventListener('submit', onSubmit);

    // Обработчик кликов по ссылкам
    // Используем ближайший контейнер формы для поиска ссылок
    const footer = form.closest('.form-container')?.querySelector('.form-footer');
    if (footer) {
        const loginLink = footer.querySelector('.link');
        if (loginLink && onClickLink) {
            loginLink.addEventListener('click', onClickLink);
        }
    }

    // Ссылка на условия может быть не в футере, ищем по всей форме
    const termsLink = form.querySelector('.terms-text a, .terms-link');
    if (termsLink && onClickTermsLink) {
        termsLink.addEventListener('click', onClickTermsLink);
    }
}