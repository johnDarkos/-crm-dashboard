import homePageCss from "./homepage.css"

export const homePage = () => {
    const container = document.createElement('div');
    container.classList.add('home_container');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = '🚀';

    const h1 = document.createElement('h1');
    h1.textContent = 'Мы готовим что-то особенное';

    const p = document.createElement('p');
    p.textContent = 'Наш сайт скоро откроется. Подпишитесь, чтобы первыми узнать о запуске и получить эксклюзивные предложения.';

    const countdown = document.createElement('div');
    countdown.classList.add('countdown');

    const units = [
        { num: '15', label: 'дней' },
        { num: '08', label: 'часов' },
        { num: '42', label: 'минут' },
        { num: '18', label: 'секунд' },
    ];
    const frag = document.createDocumentFragment();
    units.forEach(({ num, label }) => {
        const unit = document.createElement('div');
        unit.classList.add('time-unit');
        const spanNum = document.createElement('span');
        spanNum.classList.add('time-number');
        spanNum.textContent = num;
        const spanLabel = document.createElement('span');
        spanLabel.classList.add('time-label');
        spanLabel.textContent = label;
        unit.append(spanNum, spanLabel);
        frag.append(unit);
    });
    countdown.append(frag);

    const subscribe = document.createElement('div');
    subscribe.classList.add('subscribe');
    const input = document.createElement('input');
    input.type = 'email';
    input.classList.add('email-input');
    input.placeholder = 'Ваш email';
    const btn = document.createElement('button');
    btn.classList.add('subscribe-btn');
    btn.textContent = 'Уведомить меня';
    subscribe.append(input, btn);

    container.append(logo, h1, p, countdown, subscribe);
    return container;
}