import { userPageTemplate } from './userPageTemplate.js';

export const initUserPage = () => {
    const node = userPageTemplate();
    return {
        node,
        init: null
    };
};

