import React from 'react';

const List = props => {
    const { trendingRepos } = props;

    return (
        <ul className="trending-list">
            {
                trendingRepos.map((repo, key) => {
                    return (
                        <li key={key}>
                            <h2>{repo.name}</h2>
                            <h3>Author: {repo.author}</h3>
                            <p>{repo.description}</p>
                            <a href={repo.url} target="_blank">View on GitHub</a>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default List;