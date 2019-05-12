import React, {Component} from 'react';
import ArticleListItem from './ArticleListItem';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';


const mapStateToProps = state => {
    return {articleList: state.article.articleList}
};

const ConnectedArticleList = ({articleList}) => (
    <div>
        {articleList.list.map(article =>
            <ArticleListItem key={article.id + '_' + uuidv1()} article={article}/>
        )}
    </div>
);

const ArticleList = connect(mapStateToProps)(ConnectedArticleList);
export default ArticleList;

