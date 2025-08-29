import { generateTimeBasedUserId } from "../utils/generateTimeBasedUserId"


export class User {
    constructor({
        id = null,
        name = '',
        email = '',
        password = '',
        role = '',
        avatar = '',
        lastLogin = null,
        permissions = []
    } = {}) {
        this.id = id ?? generateTimeBasedUserId();
        this.name = name;
        this.email = email;
        this.password = password; // Хэш пароля
        this.role = role;
        this.avatar = avatar;
        this.lastLogin = lastLogin ? new Date(lastLogin) : null;
        this.permissions = Array.isArray(permissions) ? [...permissions] : [];
    }

    updateProfile({ name, email, avatar } = {}) {
        if (typeof name === 'string') this.name = name;
        if (typeof email === 'string') this.email = email;
        if (typeof avatar === 'string') this.avatar = avatar;
        return this;
    }

    setRole(role) {
        if (typeof role === 'string') this.role = role;
        return this;
    }

    addPermission(permission) {
        if (!permission) return this;
        if (!this.permissions.includes(permission)) {
            this.permissions.push(permission);
        }
        return this;
    }

    removePermission(permission) {
        this.permissions = this.permissions.filter(p => p !== permission);
        return this;
    }

    hasPermission(permission) {
        return this.permissions.includes(permission);
    }

    markLogin(date = new Date()) {
        this.lastLogin = new Date(date);
        return this;
    }

    get displayName() {
        return this.name || this.email || 'User';
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role,
            avatar: this.avatar,
            lastLogin: this.lastLogin ? this.lastLogin.toISOString() : null,
            permissions: [...this.permissions]
        };
    }

    static fromJSON(json) {
        if (!json || typeof json !== 'object') return new User();
        return new User(json);
    }
}