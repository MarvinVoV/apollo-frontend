import React from 'react';
import {Divider, Tag} from 'antd';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faCommentAlt, faHeart, faShareAlt} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import 'moment/locale/zh-cn'
import '../../theme/App.css';
import MarkdownParser from '../MarkdownParser';
import {parseResponse} from "../../utils/Tools";
import config from '../../config'

library.add(faHeart, faCommentAlt, faShareAlt, faCoffee);
moment.locale('zh-cn');

const ArticleListItem = ({article}) => {

    const data = parseResponse(article, {
        'title': '',
        'digest': '',
        'categoryName': '',
        'modifiedTime': new Date().getTime() + '',
        'likeCount': 0,
        'viewCount': 0,
        'tag': '',
        'id': 0
    });

    let renderTag = (tag) => {
        if (tag) {
            return (
                <span>
                    {
                        tag.split(',').map((tg, index) => {
                            return <Tag key={[tg, index].join('_')} color="#B3B6B7">{tg}</Tag>
                        })
                    }
                </span>
            );
        }
    };

    return (
        <div>
            <div>
                <div className="article_title">
                    <a href={'/front/article/p/' + data.id}>{data.title}</a>
                </div>
                <div className="article_meta_info">
                    <span> 发布于 {moment(new Date(data.modifiedTime)).fromNow()}</span>
                </div>
                <MarkdownParser data={data.digest}/>
                <div className="article_meta_info">
                    <span className="article_meta_item">
                        {renderTag(data.tag)}
                    </span>
                    <span className="article_meta_item">
                        <a href="#"><FontAwesomeIcon icon={faHeart}/> {data.likeCount}</a></span>
                    <span className="article_meta_item">
                        <a href="#"><FontAwesomeIcon icon={faCommentAlt}/> {data.viewCount}</a></span>
                    <span className="article_meta_item">
                        <a href="#"><FontAwesomeIcon icon={faShareAlt}/> 分享</a></span>
                    <span className="article_meta_item">
                        {moment(new Date(data.modifiedTime)).format('YYYY-MM-DD HH:mm:ss')}
                    </span>
                </div>
            </div>
            <Divider/>
        </div>
    );
};


export default ArticleListItem;