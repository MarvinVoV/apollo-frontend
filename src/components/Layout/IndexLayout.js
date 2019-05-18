import React, {Component} from 'react';
import {Card, Layout, Tag} from "antd";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons/faCoffee'
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons/faCommentAlt'
import {faShareAlt} from '@fortawesome/free-solid-svg-icons/faShareAlt'
import {faMailBulk} from '@fortawesome/free-solid-svg-icons/faMailBulk'
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub'
import DefaultLayout from './DefaultLayout';
import '../../theme/App.css';

const {Content, Sider} = Layout;

library.add(faGithub, faCommentAlt, faShareAlt, faCoffee, faMailBulk);

const IndexLayout = ({component: Component, ...rest}) => {
    return (
        <DefaultLayout {...rest} component={matchProps => (
            <Layout>
                <Layout style={{backgroundColor: "white"}}>
                    <Content className="main_layout_content">
                        <Component {...matchProps} />
                    </Content>
                </Layout>
                <Sider breakpoint="lg" collapsedWidth="0" theme="light" width="300" className="sider">
                    <div>
                        <Card title="博文标签" bordered={false}>
                            <Tag>Java</Tag>
                            <Tag>Docker</Tag>
                        </Card>
                        <Card title="资源链接" bordered={false}>
                            <div className="share_brands">
                                <ul>
                                    <li><a href="https://github.com/MarvinVoV">
                                        <FontAwesomeIcon icon={faGithub} size="lg"/></a></li>
                                    <li><a href="mailto:marvinvov@outlook.com">
                                        <FontAwesomeIcon icon={faMailBulk} size="lg"/></a></li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                </Sider>
            </Layout>
        )}/>
    );
};

export default IndexLayout;