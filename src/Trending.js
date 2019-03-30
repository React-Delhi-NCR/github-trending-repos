import React, { Component } from 'react';
import Loader from './Loader';
import List from './List';
import GetRepos from './utils/getRepos';
class Trending extends Component {
    state = {
        trendingRepos: this.props.trendingRepos,
        loading: this.props.loading
    }

    fetchTrendingRepos() {
        return GetRepos()
                .then(trendingRepos => {
                    this.setState({ trendingRepos, loading: false })
                })
                .catch(err => console.log(err))
    }

    componentDidMount() {
        this.fetchTrendingRepos();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.trendingRepos) {
            this.setState({
                trendingRepos: nextProps.trendingRepos
            })
        }
        this.setState({
            loading: nextProps.loading
        })
    }

    render() {
        const { loading, trendingRepos } = this.state;

        return !loading && trendingRepos.length ? <List trendingRepos={trendingRepos} /> : <Loader />;
    }
}

export default Trending;