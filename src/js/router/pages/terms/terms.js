import { createTermsView } from "./termsTemplate.js";
import { createTermsContent } from "./termsContent.js";


const initTerms = (toc) => {
    if (!toc) return;
    const tocLinks = toc.querySelectorAll('a');

    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Проверяем, что ссылка ведет на якорь внутри документа
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.slice(1);

                // Получаем контент для выбранной секции
                const content = createTermsContent[targetId]();
                if (content) {
                    // Находим секцию для отображения контента
                    const contentContainer = document.querySelector('.content-container');
                    if (contentContainer) {
                        // Очищаем предыдущий контент
                        contentContainer.innerHTML = '';

                        // Добавляем новый контент
                        contentContainer.appendChild(content);

                        // Прокручиваем к секции контента
                        const contentSection = document.getElementById('content-section');
                        if (contentSection) {
                            contentSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }

                // Удаляем активный класс у всех ссылок
                tocLinks.forEach(link => link.classList.remove('active'));

                // Добавляем активный класс к текущей ссылке
                link.classList.add('active');
            }
        });
    });
}


export const terms = () => { 
    const node = createTermsView();
    return {
        node,
        init: () => {
            const toc = document.querySelector('.toc-list');
            initTerms(toc);
        }
    };
}