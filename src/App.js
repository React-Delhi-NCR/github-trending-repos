import React, { Fragment } from 'react';
import Header from './Header';
import Filter from './components/Filter'; // we can create a directory strucure based on components as well
import Trending from './Trending';

const App = () => {
    // state = {
    //     language: '',
    //     time: ''
    // }

    return (
        <Fragment>
            <Header />
            <main>
                <Filter />
                <Trending />
            </main>
        </Fragment>
    );
};

export default App;