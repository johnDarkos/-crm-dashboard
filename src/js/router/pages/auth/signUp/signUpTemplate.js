import "./signup.css"

export const signUpTemplate = `
            <div class="form-container">
                <div class="form-wrapper">
                    <div class="form-header">
                        <h1>Регистрация</h1>
                    </div>

                    <form class="register-form" id="registerForm">
                        <div class="form-group">
                            <input type="text" id="fullName" name="fullName" required placeholder="Полное имя">
                        </div>

                        <div class="form-group">
                            <input type="email" id="email" name="email" required placeholder="Email">
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <input type="password" id="password" name="password" required placeholder="Пароль">
                            </div>
                            <div class="form-group">
                                <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Подтвердите пароль">
                            </div>
                        </div>

                        <div class="form-group">
                            <input type="text" id="company" name="company" placeholder="Компания (опционально)">
                        </div>

                        <div class="form-group checkbox-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="terms" name="terms" required>
                                <span class="checkmark"></span>
                                <span class="terms-text">Согласен с <a href="#">условиями</a></span>
                            </label>
                        </div>

                        <button type="submit" class="submit-btn">Создать аккаунт</button>
                    </form>

                    <div class="form-footer">
                        <p>Уже есть аккаунт? <a href="#" class="link">Войти</a></p>
                    </div>
                </div>
            </div>
  `