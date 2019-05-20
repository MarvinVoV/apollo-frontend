import React from 'react';
import {Divider, Tag, Row, Col} from 'antd';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faCommentAlt, faThumbsUp, faShareAlt} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import 'moment/locale/zh-cn'
import '../../theme/App.css';
import MarkdownParser from '../MarkdownParser';
import {parseResponse} from "../../utils/Tools";

library.add(faThumbsUp, faCommentAlt, faShareAlt, faCoffee);
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
                    <a href={'/front/article/p/' + data.id}>
                        <h4 className="news__item-title">{data.title}</h4>
                    </a>
                </div>
                <div className="article_list_item">
                    <MarkdownParser data={data.digest}/>
                </div>
                <div className="article_meta_info">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={16}>
                            <span className="article_meta_item">
                                {renderTag(data.tag)}
                            </span>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={2}>
                             <span className="article_meta_item">
                                <a href="#"><FontAwesomeIcon icon={faThumbsUp}/> {data.likeCount}</a>
                             </span>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={2}>
                            <span className="article_meta_item">
                                <a href="#"><FontAwesomeIcon icon={faShareAlt}/> 分享</a>
                            </span>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                             <span className="article_meta_item">
                                {moment(new Date(data.modifiedTime)).fromNow()}
                            </span>
                        </Col>
                    </Row>
                </div>
            </div>
            <Divider/>
        </div>
    );
};


export default ArticleListItem;