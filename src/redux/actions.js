import React from 'react';
import types from './types';
import PropTypes from 'prop-types';
import config from '../config'

export const loadArticles = (pageInfo = {pageNum: 1, pageSize: 5}) => {
    return (dispatch) => {
        let formData = new FormData();
        formData.set('pageNum', pageInfo.pageNum);
        formData.set('pageSize', pageInfo.pageSize);
        return fetch(config.service_url + '/article', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
            .then(json => {
                dispatch({type: types.LOAD_ARTICLES, payload: json})
            });
    }
};

loadArticles.protoTypes = {
    pageInfo: PropTypes.shape({
        pageNum: PropTypes.number.required,
        pageSize: PropTypes.number.required
    })
};