import types from '../types';

const initStatus = {
    articles: []
};

const homeReducer = (state = initStatus, action) => {
    switch (action.type) {
        case types.PAGE_LOAD_ARTICLES: {
            console.log("xx");

            break;
        }

        case types.RELOAD_ARTICLES: {
            console.log("reload");
            break;
        }
        default:
            return state;
    }
};

export default homeReducer;