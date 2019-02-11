import React, {Component} from 'react'
import moment from 'moment';
import 'moment/locale/zh-cn'
import parse from 'html-react-parser';
import '../theme/App.css';

moment.locale('zh-cn');

const ArticleItem = ({article}) => (
    <div>
        <div>
            <div className="article_title">{article.title}</div>
            <div className="article_meta_info">
                {/*{moment(new Date(article.createTime)).format('YYYY-MM-DD HH:mm:ss')}*/}
                <span> 发布于 {moment(new Date(article.modifiedTime)).fromNow()}</span>
            </div>
            <div>{parse(article.contentOfHtml)}</div>
            <div className="article_meta_info">
                <span>{article.categoryName} 类目</span>
                <span>❤️ 200</span>
                <span>评论 200</span>
                <span>分享 200</span>
            </div>
        </div>
        <hr/>
    </div>
);


export default ArticleItem;