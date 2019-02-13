import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Layout, Menu, Icon} from "antd";
import '../../theme/App.css';


const {
    Header, Content, Footer, Sider
} = Layout;

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <Layout className="default_layout">
                <Header style={{background: '#fff', overflow: 'initial'}}>
                    Head PlaceHolder
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