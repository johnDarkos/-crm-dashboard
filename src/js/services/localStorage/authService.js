const STORAGE_KEY = 'auth_session';
const TOKEN_TTL_MS = 24 * 60 * 60 * 1000; // 24h

const genToken = () => {
  if (crypto.randomUUID) return crypto.randomUUID();
  const arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
};

export const setSession = ({ email }) => {
  const session = { email, token: genToken(), expiresAt: Date.now() + TOKEN_TTL_MS };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  return session;
};

export const getSession = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const s = JSON.parse(raw);
    if (!s.expiresAt || Date.now() > s.expiresAt) {
      clearSession();
      return null;
    }
    return s;
  } catch {
    clearSession();
    return null;
  }
};

export const clearSession = () => localStorage.removeItem(STORAGE_KEY);
export const isAuthenticated = () => !!getSession();