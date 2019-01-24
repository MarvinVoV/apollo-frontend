import types from './types';

export const loadArticles = (pageInfo) => {
    return (dispatch) => {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({type: types.LOAD_ARTICLES, payload: json})
            });
    }
};

