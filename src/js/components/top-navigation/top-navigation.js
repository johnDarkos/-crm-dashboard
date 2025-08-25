import './top-navigation.css';
import '../buttons/btn-auth.css';
import { authButtons } from '../buttons/btn-auth.js';

const auth = () => {
  const btnsAuth = authButtons();
  
  return btnsAuth
}

export const navigation = (...list) => {
    if (list.length === 0) return '';

    return `
        <div class="header-container">
            <ul class="nav-list">
                ${list.join('')}
            </ul>
            ${auth()}
        </div>
    `;
};