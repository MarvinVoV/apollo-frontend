import React, {Component} from 'react';
import {Layout, Menu, Icon} from "antd";
import DefaultLayout from './DefaultLayout';
import '../../theme/App.css';


const {
    Header, Content, Footer, Sider
} = Layout;

const IndexLayout = ({component: Component, ...rest}) => {
    return (
        <DefaultLayout {...rest} component={matchProps => (
            <Layout>
                <Sider breakpoint="lg" collapsedWidth="0" theme="light" width="300" className="sider">
                    <ul>
                        <li><a href="/">Index</a></li>
                        <li><a href="/about">about</a></li>
                    </ul>
                </Sider>
                <Layout>
                    <Content style={{margin: '1px 1px 0', overflow: 'initial'}}>
                        <Component {...matchProps} />
                    </Content>
                </Layout>
            </Layout>
        )}/>
    );
};

export default IndexLayout;