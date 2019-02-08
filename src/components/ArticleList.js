import React, {Component} from 'react';
import ArticleItem from './ArticleItem';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';


const mapStateToProps = state => {
    return {articleModel: state.home.articleModel}
};

const ConnectedArticleList = ({articleModel}) => (
    <div>
        {articleModel.list.map(article =>
            <ArticleItem key={article.id + '_' + uuidv1()} article={article}/>
        )}
    </div>
);

const ArticleList = connect(mapStateToProps)(ConnectedArticleList);
export default ArticleList;

