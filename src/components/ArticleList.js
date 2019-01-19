import React, {Component} from 'react';

class ArticleItem extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>{this.props.article.title}</div>
                    <div>{this.props.article.content}</div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default class ArticleList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const articles = this.props.articles.map(item =>
            <ArticleItem key={item.id} article={item}/>
        );

        return (
            <div>
                {articles}
            </div>
        );
    }
}

