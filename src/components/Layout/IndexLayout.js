import React, {Component} from 'react';
import {Card, Layout, Tag} from "antd";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faCommentAlt, faShareAlt} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import DefaultLayout from './DefaultLayout';
import '../../theme/App.css';

const {
    Header, Content, Footer, Sider
} = Layout;

library.add(faGithub, faCommentAlt, faShareAlt, faCoffee);

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
                        <Card title="文章标签" bordered={false}>
                            <Tag>Tag 1</Tag>
                            <Tag>Tag 2</Tag>
                        </Card>
                        <Card title="关于我" bordered={false}>
                            <div>这是一段描述</div>
                            <div className="share_brands">
                                <ul>
                                    <li><a href="/"><FontAwesomeIcon icon={faGithub} size="lg"/></a></li>
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