import React, {Component} from 'react';
import parse from 'html-react-parser';

const ArticleItem = ({article}) => (
    <div>
        <div>
            <div>{article.title}</div>
            <div>{parse(article.contentOfHtml)}</div>
        </div>
        <hr/>
    </div>
);


export default ArticleItem;