import types from '../types';

const initStatus = {
    articles: []
};

const homeReducer = (state = initStatus, action) => {
    if (typeof action === 'undefined') {
        return state;
    }
    console.log(types.LOAD_ARTICLES)
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