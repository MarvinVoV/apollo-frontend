import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Layout, Menu, Divider} from "antd";
import '../../theme/App.css';


const {
    Header, Content, Footer, Sider
} = Layout;

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <Layout className="default_layout">
                <Header className="default_layout_header">
                    <div className="logo"><a href="/">Sunyameng</a></div>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        className="menu"
                    >
                        <Menu.Item key="1"><a href="/">HOME</a></Menu.Item>
                        <Menu.Item key="2"><a href="/about">ABOUT</a></Menu.Item>
                    </Menu>
                </Header>

                <Content className="content">
                    <Component {...matchProps}/>
                </Content>
                <Footer className="footer">
                    ©2018-2019 Created by sunyameng / 博客 / 豫ICP备19004908号-1
                </Footer>
            </Layout>
        )}>
        </Route>
    );
};
export default DefaultLayout;