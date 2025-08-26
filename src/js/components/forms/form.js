export const form = (children, className) => {
    const formEl = document.createElement('form');
    if (className) formEl.className = className;

    const fragment = document.createDocumentFragment();
    children.forEach(child => {
        if (child instanceof HTMLElement) {
            fragment.append(child);
        } else if (typeof child === 'string') {
            const temp = document.createElement('div');
            temp.innerHTML = child.trim();
            // Добавим все элементы верхнего уровня
            Array.from(temp.childNodes).forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) fragment.append(node);
            });
        }
    });

    formEl.append(fragment);
    return formEl;
};
