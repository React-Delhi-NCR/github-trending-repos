import React, { Component } from 'react';
import Loader from './Loader';
import List from './List';

class Trending extends Component {
    state = {
        trendingRepos: [],
        loading: true
    }

    fetchTrendingRepos() {
        //'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
        return fetch('https://github-trending-api.now.sh/repositories')
            .then(res => res.json())
            .then(trendingRepos => this.setState({ trendingRepos, loading: false }))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchTrendingRepos();
    }

    render() {
        const { loading, trendingRepos } = this.state;

        return !loading && trendingRepos.length ? <List trendingRepos={trendingRepos} /> : <Loader />;
    }
}

export default Trending;