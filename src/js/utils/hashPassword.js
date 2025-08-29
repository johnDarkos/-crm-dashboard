

    // Простое хэширование пароля (в продакшене используйте bcrypt или аналог)
    export const hashPassword = (password) => {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Преобразовать в 32-битное целое
        }
        return hash.toString();
    };