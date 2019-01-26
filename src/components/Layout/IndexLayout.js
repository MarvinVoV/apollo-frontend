import React, {Component} from 'react';
import {Layout, Menu, Icon} from "antd";
import DefaultLayout from './DefaultLayout';

const {
    Header, Content, Footer, Sider
} = Layout;

const IndexLayout = ({component: Component, ...rest}) => {
    return (
        <DefaultLayout {...rest} component={matchProps => (
            <Layout>
                <Sider theme="light" style={{
                    overflow: 'auto', height: '100vh', left: 0,
                }}>
                    <ul>
                        <li><a href="/">Index</a></li>
                        <li><a href="/about">about</a></li>
                        <li><a href="/post">post</a></li>
                    </ul>
                </Sider>
                <Layout>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <Component {...matchProps} />
                    </Content>
                </Layout>
            </Layout>
        )}/>
    );
};

export default IndexLayout;