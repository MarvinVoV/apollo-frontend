import types from '../types';

const initStatus = {
    articleModel: {
        list: [],
        total: 0,
        pageNo: 1,
        pageSize: 5,
        totalPages: 0
    }

};

const homeReducer = (state = initStatus, action) => {
    if (typeof action === 'undefined') {
        return state;
    }
    switch (action.type) {
        case types.LOAD_ARTICLES: {
            if (action.payload === 'undefined') {
                return state;
            }
            return Object.assign({}, state, {
                articleModel: {
                    list: action.payload.list,
                    total: action.payload.total,
                    pageNo: action.payload.pageNo,
                    pageSize: action.payload.pageSize,
                    totalPages: action.payload.totalPages
                }
            });
        }
        default:
            return state;
    }
};

export default homeReducer;