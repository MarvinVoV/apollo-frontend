import React from 'react';
import {connect} from 'react-redux';
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";
import {faCommentAlt} from "@fortawesome/free-solid-svg-icons/faCommentAlt";
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons/faShareAlt";
import {BackTop, Tag} from "antd";
import {library} from '@fortawesome/fontawesome-svg-core';
import moment from 'moment';
import 'moment/locale/zh-cn'
import '../../theme/App.css';
import MarkdownParser from '../MarkdownParser';
import {parseResponse} from '../../utils/Tools';

library.add(faHeart, faCommentAlt, faShareAlt, faCoffee);
moment.locale('zh-cn');


const mapStateToProps = state => {
    return {article: state.article.article}
};

const ConnectedArticleDetail = ({article}) => {
    const data = parseResponse(article, {
        'title': '',
        'contentOfMd': '',
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
            <BackTop/>
            <div>
                <div className="article_detail_title">
                    <h4>{data.title}</h4>
                </div>
                <div className="article_meta_info">
                    <span> 发布于 {moment(new Date(data.modifiedTime)).fromNow()}</span>
                    <span> 阅读 {data.viewCount} </span>
                </div>
                <MarkdownParser data={data.contentOfMd}/>
                <div>
                     <span className="article_meta_item">
                        {renderTag(data.tag)}
                    </span>
                </div>
            </div>
        </div>
    );
};

const ArticleDetail = connect(mapStateToProps)(ConnectedArticleDetail);

export default ArticleDetail;

