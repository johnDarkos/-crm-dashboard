import aboutCss from './about.css';


export const aboutPage = () => {
    return `
        <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>О нас - CRM Система</title>
    <link rel="stylesheet" href="about.css">
</head>
<body>
    <div class="container">
        <main class="main-content">
            <div class="hero-section">
                <h1 class="main-title">О нашей CRM системе</h1>
                <p class="subtitle">Революционный подход к управлению взаимоотношениями с клиентами</p>
            </div>

            <div class="content-section">
                <div class="mission-card">
                    <div class="icon">🎯</div>
                    <h2>Наша миссия</h2>
                    <p>Сделать управление клиентскими отношениями простым, эффективным и интуитивно понятным для бизнеса любого масштаба.</p>
                </div>

                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">🚀</div>
                        <h3>Инновации</h3>
                        <p>Современные технологии и передовые практики в области CRM</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🔒</div>
                        <h3>Безопасность</h3>
                        <p>Максимальная защита ваших данных и конфиденциальной информации</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🔄</div>
                        <h3>Автоматизация</h3>
                        <p>Автоматизируйте рутинные процессы и сосредоточьтесь на развитии бизнеса</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📈</div>
                        <h3>Аналитика</h3>
                        <p>Глубокая аналитика для принятия обоснованных бизнес-решений</p>
                    </div>
                </div>

                <div class="team-preview">
                    <h2>Наша команда</h2>
                    <p>Профессионалы с многолетним опытом в разработке CRM решений, маркетинге и управлении проектами.</p>
                    <div class="team-members">
                        <div class="team-member">
                            <div class="member-avatar">👨‍💼</div>
                            <div class="member-info">
                                <h4>Александр Герасимов</h4>
                                <p>CEO & Основатель</p>
                            </div>
                        </div>
                        <div class="team-member">
                            <div class="member-avatar">👩‍💻</div>
                            <div class="member-info">
                                <h4>Диана Герасимова</h4>
                                <p>Технический директор</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cta-section">
                <h2>Готовы начать?</h2>
                <p>Присоединяйтесь к тысячам компаний, которые уже используют нашу CRM систему</p>
                <button class="cta-button">Попробовать бесплатно</button>
            </div>
        </main>

        <footer class="footer">
            <p>&copy; 2024 CRM Система. Все права защищены.</p>
        </footer>
    </div>
</body>
</html>
    `
}