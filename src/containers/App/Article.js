import React from 'react';
import {loadArticle} from '../../redux/actions';
import ArticleDetail from '../../components/Article/ArticleDetail';
import {connect} from "react-redux";


class Article extends React.Component {
    componentDidMount() {
        let articleId = this.props.match.params.id;
        this.props.loadArticle(articleId);
    }

    render() {
        return (
            <div>
                <ArticleDetail/>
            </div>
        );
    }
}

export default connect(null, {loadArticle})(Article);