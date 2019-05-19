import React, {Component} from 'react';
import '../../theme/App.css';
import ArticleList from '../../components/Article/ArticleList'
import {loadArticles} from '../../redux/actions';
import {connect} from "react-redux";
import ArticlePagination from '../../components/Article/ArticlePagination';


class App extends Component {
    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        return (
            <div>
                <div>
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
