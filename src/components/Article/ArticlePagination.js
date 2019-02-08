import React, {Component} from 'react'
import {connect} from 'react-redux';
import {loadArticles} from '../../redux/actions';
import {Pagination} from "antd";
import '../../theme/App.css';

const mapStateToProps = state => {
    return {articleModel: state.home.articleModel}
};

class ArticlePagination extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(page, pageSize) {
        this.props.onLoadMoreClick({pageNum: page, pageSize: pageSize});
    }

    render() {
        return (<div className="article-pagination-div">
                <Pagination defaultCurrent={this.props.articleModel.pageNo}
                            defaultPageSize={this.props.articleModel.pageSize}
                            total={this.props.articleModel.total}
                            onChange={this.onChange}/>
            </div>
        );
    }

}


const mapDispatchToProps = dispatch => {
    return {
        onLoadMoreClick: pageInfo => {
            dispatch(loadArticles(pageInfo))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ArticlePagination);

