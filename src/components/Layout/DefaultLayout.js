import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Layout, Menu, Icon} from "antd";


const {
    Header, Content, Footer, Sider
} = Layout;

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <Layout>
                <Header style={{background: '#fff', overflow: 'initial'}}>
                    Head PlaceHolder
                </Header>
                <Content>
                    <Component {...matchProps}/>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        )}>
        </Route>
    );
};
export default DefaultLayout;