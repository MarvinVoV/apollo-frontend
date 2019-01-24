import React, {Component} from 'react';


const ArticleItem = ({article}) => (
    <div>
        <div>
            <div>{article.title}</div>
            <div>{article.body}</div>
        </div>
        <hr/>
    </div>
);


export default ArticleItem;