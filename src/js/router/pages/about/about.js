import aboutCss from './about.css';


export const aboutPage = () => {
    const container = document.createElement('div');
    container.classList.add('container');

    const main = document.createElement('main');
    main.classList.add('main-content');

    const hero = document.createElement('div');
    hero.classList.add('hero-section');
    const h1 = document.createElement('h1');
    h1.classList.add('main-title');
    h1.textContent = 'О нашей CRM системе';
    const subtitle = document.createElement('p');
    subtitle.classList.add('subtitle');
    subtitle.textContent = 'Революционный подход к управлению взаимоотношениями с клиентами';
    hero.append(h1, subtitle);

    const content = document.createElement('div');
    content.classList.add('content-section');

    const mission = document.createElement('div');
    mission.classList.add('mission-card');
    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.textContent = '🎯';
    const h2 = document.createElement('h2');
    h2.textContent = 'Наша миссия';
    const p = document.createElement('p');
    p.textContent = 'Сделать управление клиентскими отношениями простым, эффективным и интуитивно понятным для бизнеса любого масштаба.';
    mission.append(icon, h2, p);

    const grid = document.createElement('div');
    grid.classList.add('features-grid');
    const features = [
        { emoji: '🚀', title: 'Инновации', text: 'Современные технологии и передовые практики в области CRM' },
        { emoji: '🔒', title: 'Безопасность', text: 'Максимальная защита ваших данных и конфиденциальной информации' },
        { emoji: '🔄', title: 'Автоматизация', text: 'Автоматизируйте рутинные процессы и сосредоточьтесь на развитии бизнеса' },
        { emoji: '📈', title: 'Аналитика', text: 'Глубокая аналитика для принятия обоснованных бизнес-решений' },
    ];
    const gridFrag = document.createDocumentFragment();
    features.forEach(({ emoji, title, text }) => {
        const card = document.createElement('div');
        card.classList.add('feature-card');
        const ic = document.createElement('div');
        ic.classList.add('feature-icon');
        ic.textContent = emoji;
        const h3 = document.createElement('h3');
        h3.textContent = title;
        const tp = document.createElement('p');
        tp.textContent = text;
        card.append(ic, h3, tp);
        gridFrag.append(card);
    });
    grid.append(gridFrag);

    const team = document.createElement('div');
    team.classList.add('team-preview');
    const th = document.createElement('h2');
    th.textContent = 'Наша команда';
    const tp2 = document.createElement('p');
    tp2.textContent = 'Профессионалы с многолетним опытом в разработке CRM решений, маркетинге и управлении проектами.';
    const members = document.createElement('div');
    members.classList.add('team-members');

    const memberData = [
        { avatar: '👨‍💼', name: 'Александр Герасимов', role: 'CEO & Основатель' },
        { avatar: '👩‍💻', name: 'Диана Герасимова', role: 'Технический директор' },
    ];
    const memFrag = document.createDocumentFragment();
    memberData.forEach(({ avatar, name, role }) => {
        const m = document.createElement('div');
        m.classList.add('team-member');
        const a = document.createElement('div');
        a.classList.add('member-avatar');
        a.textContent = avatar;
        const info = document.createElement('div');
        info.classList.add('member-info');
        const h4 = document.createElement('h4');
        h4.textContent = name;
        const rp = document.createElement('p');
        rp.textContent = role;
        info.append(h4, rp);
        m.append(a, info);
        memFrag.append(m);
    });
    members.append(memFrag);
    team.append(th, tp2, members);

    content.append(mission, grid, team);

    const cta = document.createElement('div');
    cta.classList.add('cta-section');
    const ctaH2 = document.createElement('h2');
    ctaH2.textContent = 'Готовы начать?';
    const ctaP = document.createElement('p');
    ctaP.textContent = 'Присоединяйтесь к тысячам компаний, которые уже используют нашу CRM систему';
    const ctaBtn = document.createElement('button');
    ctaBtn.classList.add('cta-button');
    ctaBtn.textContent = 'Попробовать бесплатно';
    cta.append(ctaH2, ctaP, ctaBtn);

    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const fp = document.createElement('p');
    fp.innerHTML = '&copy; 2024 CRM Система. Все права защищены.';
    footer.append(fp);

    main.append(hero, content, cta);
    container.append(main, footer);
    return container;
}