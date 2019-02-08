import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadArticles} from '../redux/actions';
import {Button} from 'antd';

class ConnectedLoadMore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 1,
            pageSize: 5,
            loading: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        this.setState({pageNum: this.state.pageNum, pageSize: this.state.pageSize, loading: true});
        const pageInfo = {pageNum: this.state.pageNum + 1, pageSize: this.state.pageSize, loading: false};
        this.props.onLoadMoreClick(pageInfo);
        this.setState(pageInfo);
    }

    render() {
        return (
            <Button type="dashed" loading={this.state.loading} onClick={this.onClick} block>加载更多</Button>
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

const LoadMore = connect(null, mapDispatchToProps)(ConnectedLoadMore);

export default LoadMore;
