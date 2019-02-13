import React, {Component} from 'react';
import {Divider, Empty} from 'antd';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faCommentAlt, faShareAlt, faCoffee} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import 'moment/locale/zh-cn'
import parse from 'html-react-parser';
import '../theme/App.css';

library.add(faHeart, faCommentAlt, faShareAlt, faCoffee);
moment.locale('zh-cn');

const ArticleItem = ({article}) => {
    const contentOfHtml = safeValue(article, 'contentOfHtml', '');
    const category = safeValue(article, 'categoryName', '');
    const modifiedTime = safeValue(article, 'modifiedTime', new Date().getTime() + '');
    const likeCount = safeValue(article, 'likeCount', 0);
    const viewCount = safeValue(article, 'viewCount', 0);
    return (
        <div>
            <div>
                <div className="article_title">{article.title}</div>
                <div className="article_meta_info">
                    <span> 发布于 {moment(new Date(modifiedTime)).fromNow()}</span>
                </div>
                <div>{
                    contentOfHtml.length !== 0 ? parse(contentOfHtml) : <Empty description="暂无内容"/>
                }</div>
                <div className="article_meta_info">
                    <span>{category}</span>
                    <span className="article_meta_item">
                        <a href="#"><FontAwesomeIcon icon={faHeart}/> {likeCount}</a></span>
                    <span className="article_meta_item">
                        <a href="#"><FontAwesomeIcon icon={faCommentAlt}/> {viewCount}</a></span>
                    <span className="article_meta_item">
                        <a href="#"><FontAwesomeIcon icon={faShareAlt}/> 分享</a></span>
                    <span className="article_meta_item">
                        {moment(new Date(modifiedTime)).format('YYYY-MM-DD HH:mm:ss')}
                    </span>
                </div>
            </div>
            <Divider/>
        </div>
    )
};

function safeValue(data, property, defaultValue = null) {
    if (data && data.hasOwnProperty(property)) {
        if (data[property] && data[property].length !== 0) {
            return data[property];
        }
    }
    return defaultValue;
}


export default ArticleItem;