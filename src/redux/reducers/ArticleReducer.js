import actionTypes from '../actionTypes';

const initStatus = {
    articleList: {
        list: [],
        total: 0,
        pageNo: 1,
        pageSize: 5,
        totalPages: 0
    },
    article: {}
};

const articleReducer = (state = initStatus, action) => {
    if (typeof action === 'undefined' || action.payload === 'undefined') {
        return state;
    }
    switch (action.type) {
        case actionTypes.article.loadArticles: {
            return Object.assign({}, state, {
                articleList: {
                    list: action.payload.list,
                    total: action.payload.total,
                    pageNo: action.payload.pageNo,
                    pageSize: action.payload.pageSize,
                    totalPages: action.payload.totalPages
                }
            });
        }
        case actionTypes.article.loadArticle: {
            return Object.assign({}, state, {
                article: action.payload ? action.payload : {}
            });
        }
        default:
            return state;
    }
};

export default articleReducer;