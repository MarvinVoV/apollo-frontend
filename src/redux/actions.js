import React from 'react';
import actionTypes from './actionTypes';
import PropTypes from 'prop-types';
import config from '../config'

const loadArticles = (pageInfo = {pageNum: 1, pageSize: 5}) => {
    return (dispatch) => {
        let formData = new FormData();
        formData.set('pageNum', pageInfo.pageNum);
        formData.set('pageSize', pageInfo.pageSize);
        return fetch(config.service_url + '/article', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
            .then(json => {
                dispatch({type: actionTypes.article.loadArticles, payload: json})
            });
    }
};
loadArticles.protoTypes = {
    pageInfo: PropTypes.shape({
        pageNum: PropTypes.number.required,
        pageSize: PropTypes.number.required
    })
};


const loadArticle = (articleId = 0) => {
    return (dispatch) => {
        return fetch(config.service_url + '/article/p/' + articleId, {method: 'POST'})
            .then(response => response.json()).then(json => {
                dispatch({type: actionTypes.article.loadArticle, payload: json})
            });
    }
};
loadArticle.protoTypes = {
    articleId: PropTypes.number
};

export {loadArticles, loadArticle};