import './terms.css';

export const createTermsView = () => {
    // Создание основных контейнеров
    const container = document.createElement('div');
    container.className = 'terms-container';

    const main = document.createElement('main');
    main.className = 'main-content';

    // Header
    const termsHeader = document.createElement('div');
    termsHeader.className = 'terms-header';

    const headerContent = document.createElement('div');
    headerContent.className = 'header-content';


    const headerText = document.createElement('div');
    headerText.className = 'header-text';

    const h1 = document.createElement('h1');
    h1.textContent = 'Условия использования CRM Системы';

    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.textContent = 'Юридический документ, регулирующий использование нашего сервиса';

    headerText.appendChild(h1);
    headerText.appendChild(subtitle);

    headerContent.appendChild(headerText);

    // Document meta
    const documentMeta = document.createElement('div');
    documentMeta.className = 'document-meta';

    const metaItems = [
        { label: 'Версия:', value: '2.1' },
    ];

    metaItems.forEach(item => {
        const metaItem = document.createElement('div');
        metaItem.className = 'meta-item';

        const metaLabel = document.createElement('span');
        metaLabel.className = 'meta-label';
        metaLabel.textContent = item.label;

        const metaValue = document.createElement('span');
        metaValue.className = 'meta-value';
        if (item.valueClass) metaValue.classList.add(item.valueClass);
        metaValue.textContent = item.value;

        metaItem.appendChild(metaLabel);
        metaItem.appendChild(metaValue);

        documentMeta.appendChild(metaItem);
    });

    termsHeader.appendChild(headerContent);
    termsHeader.appendChild(documentMeta);

    // TOC
    const tocContainer = document.createElement('div');
    tocContainer.className = 'toc-container';

    const tocTitle = document.createElement('h2');
    tocTitle.textContent = 'Содержание';

    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';

    const tocLinks = [
        { href: '#general', text: 'Общие положения' },
        { href: '#service', text: 'Описание сервиса' },
        { href: '#account', text: 'Учетная запись' },
        { href: '#usage', text: 'Использование сервиса' },
        { href: '#ip', text: 'Интеллектуальная собственность' },
        { href: '#content', text: 'Содержимое пользователя' },
        { href: '#liability', text: 'Ограничение ответственности' },
        { href: '#payment', text: 'Оплата и тарифы' },
        { href: '#termination', text: 'Прекращение действия' },
        { href: '#changes', text: 'Изменения условий' }
    ];

    const termsContent = document.createElement('div');
    termsContent.className = 'terms-content';

    const termsText = document.createElement('div');
    termsText.className = 'terms-text';

    const termsTextContent = document.createElement('div');
    termsTextContent.className = 'terms-text-content';

    termsText.appendChild(termsTextContent);
    termsContent.appendChild(termsText);


    tocLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        tocList.appendChild(li);
    });

    tocContainer.appendChild(tocTitle);
    tocContainer.appendChild(tocList);

    // Content section
    const contentSection = document.createElement('div');
    contentSection.className = 'content-section';
    contentSection.id = 'content-section';

    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-container';

    const defaultContent = document.createElement('div');
    defaultContent.className = 'default-content';
    defaultContent.innerHTML = `
        <h3>Выберите раздел из содержания</h3>
        <p>Кликните на любой пункт в оглавлении слева, чтобы просмотреть соответствующую информацию.</p>
    `;

    contentContainer.appendChild(defaultContent);
    contentSection.appendChild(contentContainer);

    // Собираем все вместе
    main.appendChild(termsHeader);
    main.appendChild(tocContainer);
    main.appendChild(contentSection);

    container.appendChild(main);

    return container;
};

