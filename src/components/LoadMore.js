import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loadArticles} from '../redux/actions';

class ConnectedLoadMore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 1,
            pageSize: 5
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        const pageInfo = {pageNum: this.state.pageNum + 1, pageSize: this.state.pageSize};
        this.props.onLoadMoreClick(pageInfo);
        this.setState(pageInfo);
    }

    render() {
        return (
            <a href="" onClick={this.onClick}>
                load more
            </a>
        );
    }
}

ConnectedLoadMore.propTypes = {
    pageNum: PropTypes.number.required,
    pageSize: PropTypes.number.required
};


const mapDispatchToProps = dispatch => {
    return {
        onLoadMoreClick: pageInfo => {
            dispatch(loadArticles(pageInfo))
        }
    }
};

const LoadMore = connect(null, mapDispatchToProps)(ConnectedLoadMore);

export default LoadMore;
