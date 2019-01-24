import types from '../types';

const initStatus = {
    articles: []
};

const homeReducer = (state = initStatus, action) => {
    if (typeof action === 'undefined') {
        return state;
    }
    switch (action.type) {
        case types.LOAD_ARTICLES: {
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });
        }
        default:
            return state;
    }
};

export default homeReducer;