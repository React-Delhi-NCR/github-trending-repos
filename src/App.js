import React, { Fragment } from 'react';
import Header from './Header';
import Filter from './components/Filter'; // we can create a directory strucure based on components as well
import Trending from './Trending';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingRepos: [],
            loading: true
        }
    }
    handleFilterChange = (data) => {
        this.setState({
            trendingRepos: data,
            loading: false
        });
    }

    showLoader = () => {
        this.setState({
            loading: true
        });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <Filter handleFilterChange={this.handleFilterChange} showLoader={this.showLoader}/>
                    <Trending trendingRepos={this.state.trendingRepos} loading={this.state.loading}/>
                </main>
            </Fragment>
        );
    }
};

export default App;