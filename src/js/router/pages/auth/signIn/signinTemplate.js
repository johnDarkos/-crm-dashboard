import './signin.css';

export const signTemplate = `
    <div class="form-container">
        <div class="form-wrapper">
            <div class="form-header">
                <h1>Вход</h1>
            </div>
            <form class="login-form" id="loginForm">
                <div class="form-group">
                    <input type="email" name="email" placeholder="Email" autocomplete="username" required>
                </div>
                <div class="form-group">
                    <input type="password" name="password" placeholder="Пароль" autocomplete="current-password" required>
                </div>
                <div class="form-options">
                    <label class="checkbox-label">
                        <input type="checkbox" id="remember" name="remember">
                        <span class="checkmark"></span>
                        <span class="remember-text">Запомнить меня</span>
                    </label>
                    <a href="#" class="forgot-link">Забыли пароль?</a>
                </div>
                <div class="form-group">
                    <button type="submit" class="submit-btn">Войти</button>
                </div>
            </form>
            <div class="form-footer">
                <p>Нет аккаунта? <a href="#" class="link">Создать аккаунт</a></p>
            </div>
        </div>
    </div>
`;
