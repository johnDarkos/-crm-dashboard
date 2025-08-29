// Объект состояния приложения
// stateApp.js
export const appState = {
    // --- Данные ---
    user: {
        id: null,
        name: '',
        email: '',
        password: '',
        role: '',
        avatar: '',
        lastLogin: null,
        permissions: []
    },

    auth: {
        isAuthenticated: false,
        token: null,
        refreshToken: null,
        expiresAt: null
    },

    dashboard: {
        stats: {
            totalClients: 0,
            revenue: 0,
            conversionRate: 0,
            rating: 0
        },
        chartData: {
            period: '7days',
            data: []
        },
        recentActivities: [],
        topClients: []
    },

    clients: {
        list: [],
        currentPage: 1,
        totalPages: 1,
        pageSize: 20,
        filters: {
            search: '',
            status: 'all',
            sortBy: 'name',
            sortOrder: 'asc'
        },
        selectedClient: null
    },

    analytics: {
        dateRange: {
            start: null,
            end: null
        },
        metrics: {
            revenueByPeriod: [],
            clientGrowth: [],
            activityStats: {}
        }
    },

    settings: {
        theme: 'light',
        language: 'ru',
        notifications: {
            email: true,
            push: true,
            sms: false
        },
        preferences: {
            defaultView: 'dashboard',
            autoRefresh: true,
            refreshInterval: 30000
        }
    },

    ui: {
        loading: false,
        sidebarCollapsed: false,
        modal: {
            isOpen: false,
            type: null,
            data: null
        },
        notifications: [],
        errors: []
    },

    subscribers: []
};

// --- Действия ---
export const actions = {
    setUser(userData) {
        appState.user = { ...appState.user, ...userData };
        appState.auth.isAuthenticated = true;
        notifySubscribers();
    },

    clearUser() {
        appState.user = {
            id: null,
            name: '',
            email: '',
            password: '',
            role: '',
            avatar: '',
            lastLogin: null,
            permissions: []
        };
        appState.auth = {
            isAuthenticated: false,
            token: null,
            refreshToken: null,
            expiresAt: null
        };
        notifySubscribers();
    },

    updateDashboardStats(stats) {
        appState.dashboard.stats = { ...appState.dashboard.stats, ...stats };
        notifySubscribers();
    },

    updateChartData(period, data) {
        appState.dashboard.chartData = { period, data: [...data] };
        notifySubscribers();
    },

    addNotification(notification) {
        const newNotification = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            ...notification
        };
        appState.ui.notifications.push(newNotification);
        notifySubscribers();

        setTimeout(() => {
            actions.removeNotification(newNotification.id);
        }, 5000);
    },

    removeNotification(id) {
        appState.ui.notifications = appState.ui.notifications.filter(n => n.id !== id);
        notifySubscribers();
    },

    setLoading(loading) {
        appState.ui.loading = loading;
        notifySubscribers();
    },

    toggleSidebar() {
        appState.ui.sidebarCollapsed = !appState.ui.sidebarCollapsed;
        notifySubscribers();
    },

    openModal(type, data = null) {
        appState.ui.modal = { isOpen: true, type, data };
        notifySubscribers();
    },

    closeModal() {
        appState.ui.modal = { isOpen: false, type: null, data: null };
        notifySubscribers();
    },

    updateClients(clients, pagination = {}) {
        appState.clients.list = [...clients];
        if (pagination.currentPage) appState.clients.currentPage = pagination.currentPage;
        if (pagination.totalPages) appState.clients.totalPages = pagination.totalPages;
        notifySubscribers();
    },

    addError(error) {
        const newError = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            message: error.message || 'Произошла ошибка',
            code: error.code || 'UNKNOWN_ERROR'
        };
        appState.ui.errors.push(newError);
        notifySubscribers();
    },

    clearErrors() {
        appState.ui.errors = [];
        notifySubscribers();
    },

    updateSettings(newSettings) {
        appState.settings = { ...appState.settings, ...newSettings };
        notifySubscribers();
    }
};

// --- Подписка ---
export function subscribe(callback) {
    appState.subscribers.push(callback);
    return () => {
        appState.subscribers = appState.subscribers.filter(sub => sub !== callback);
    };
}

function notifySubscribers() {
    appState.subscribers.forEach(cb => cb(appState));
    saveState();
}

// --- LocalStorage ---
export function initState() {
    try {
        const savedState = localStorage.getItem('crmAppState');
        if (savedState) {
            const parsed = JSON.parse(savedState);
            appState.settings = { ...appState.settings, ...parsed.settings };
            appState.user = { ...appState.user, ...parsed.user };
            appState.auth = { ...appState.auth, ...parsed.auth };
        }
    } catch (err) {
        console.warn('Ошибка восстановления состояния:', err);
    }
}

function saveState() {
    try {
        const stateToSave = {
            settings: appState.settings,
            user: appState.user,
            auth: appState.auth
        };
        localStorage.setItem('crmAppState', JSON.stringify(stateToSave));
    } catch (err) {
        console.warn('Ошибка сохранения состояния:', err);
    }
}

// Инициализация при старте
initState();

// Экспорт stateApp с методами для доступа к состоянию
export const stateApp = {
    getUser() {
        return appState.user;
    },
    
    getAuth() {
        return appState.auth;
    },
    
    getDashboard() {
        return appState.dashboard;
    },
    
    getClients() {
        return appState.clients;
    },
    
    getSettings() {
        return appState.settings;
    },
    
    getUI() {
        return appState.ui;
    },
    
    // Делегируем действия
    ...actions
};

