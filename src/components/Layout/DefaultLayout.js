import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";
import {Layout, Menu} from "antd";
import '../../theme/App.css';


const {
    Header, Content, Footer
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
                        defaultSelectedKeys={['home']}
                        className="menu"
                    >
                        <Menu.Item key="home"><Link to="/">HOME</Link></Menu.Item>
                        <Menu.Item key="about"><Link to="/front/about">ABOUT</Link></Menu.Item>
                    </Menu>
                </Header>

                <Content className="content">
                    <Component {...matchProps}/>
                </Content>
                <Footer className="footer">
                    ©2018-2019 Created by sunyameng / Blog
                </Footer>
            </Layout>
        )}>
        </Route>
    );
};
export default DefaultLayout;