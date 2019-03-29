import React from 'react';
import './filter.css'; // importing external component stylesheet

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: '',
            since: 'daily'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filterTrendingRepos = this.filterTrendingRepos.bind(this);
    }

    styles = {
        margin: '10px auto 20px',
        width: '54%'
    }

    filterTrendingRepos( queryParams ) {
        //'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
        // TODO: 1. Move API Call to a common component
        //       2. Create a State in App.js and update it on response of this API so Trending re-renders
        return fetch('https://github-trending-api.now.sh/repositories' + queryParams)
            .then(res => {
                debugger;
                res.json()
            })
            .then(trendingRepos => this.setState({ trendingRepos, loading: false }))
            .catch(err => console.log(err));
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        let queryParams = '?since=' + this.state.since;
        if (this.state.language.trim()) {
            queryParams += 'since=' + this.state.language.trim();
        }
        this.filterTrendingRepos(queryParams);

        event.preventDefault();
    }

    render() {
        return (
            <form style={this.styles} onSubmit={this.handleSubmit} >
                <input name="language" type="text" className="filter-input" placeholder="language" onChange={this.handleInputChange}/>
                <select name="since" className="filter-input filter-select" onChange={this.handleInputChange}>
                    <option value="daily" default>Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <button className="filter-button">Apply</button>
            </form>
        );
    }
}

export default Filter;