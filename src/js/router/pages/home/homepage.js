import homePageCss from "./homepage.css"

export const homePage = () => {
    return `
        <div class="home_container">
        <div class="logo">🚀</div>
        <h1>Мы готовим что-то особенное</h1>
        <p>Наш сайт скоро откроется. Подпишитесь, чтобы первыми узнать о запуске и получить эксклюзивные предложения.</p>
        
        <div class="countdown">
            <div class="time-unit">
                <span class="time-number">15</span>
                <span class="time-label">дней</span>
            </div>
            <div class="time-unit">
                <span class="time-number">08</span>
                <span class="time-label">часов</span>
            </div>
            <div class="time-unit">
                <span class="time-number">42</span>
                <span class="time-label">минут</span>
            </div>
            <div class="time-unit">
                <span class="time-number">18</span>
                <span class="time-label">секунд</span>
            </div>
        </div>

        <div class="subscribe">
            <input type="email" class="email-input" placeholder="Ваш email">
            <button class="subscribe-btn">Уведомить меня</button>
        </div>
    `
}