import React, {Component} from 'react';
import '../../theme/App.css';
import {Layout} from "antd";
import ArticleList from '../../components/Article/ArticleList'
import {loadArticles} from '../../redux/actions';
import {connect} from "react-redux";
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
                <div style={{padding: 24, background: '#fff'}}>
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
