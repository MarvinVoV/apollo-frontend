import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";
import {Layout, Menu, Row, Col} from "antd";
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
                        <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
                        <Menu.Item key="about"><Link to="/front/about">关于</Link></Menu.Item>
                    </Menu>
                </Header>

                <Content className="content">
                    <Row>
                        <Col xs={0} sm={2} md={2} lg={2} xl={2}>
                        </Col>
                        <Col xs={24} sm={21} md={21} lg={21} xl={21}>
                            <Component {...matchProps}/>
                        </Col>
                        <Col xs={0} sm={1} md={1} lg={1} xl={1}>
                        </Col>
                    </Row>
                </Content>
                <Footer className="footer">
                    ©2018-2019 Created by Sunyameng / Blog
                </Footer>
            </Layout>
        )}>
        </Route>
    );
};
export default DefaultLayout;