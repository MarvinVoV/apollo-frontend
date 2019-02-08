import React, {Component} from 'react';
import '../../theme/App.css';
import {Layout, Menu, Icon} from "antd";
import ArticleList from '../../components/ArticleList'
import {loadArticles} from '../../redux/actions';
import {connect} from "react-redux";
import LoadMore from '../../components/LoadMore';
import ArticlePagination from '../../components/Article/ArticlePagination';


const {
    Header, Content, Footer, Sider
} = Layout;

class App extends Component {
    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        return (
            <div>
                <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
                    <ArticleList/>
                </div>
                <div>
                    <ArticlePagination/>
                </div>
            </div>
        );
    }
}

export default connect(null, {loadArticles})(App);
