import React from 'react';
import Player from '../Player/Player';
import Main from './Main';
import Minor from './Minor';

 const Home = () => {
    return (
        <div className="home">
            <Player />
            <main className="home__content container">
                <div className="home__main">
                    <Main />
                </div>
                <div className="home__minor">
                    <Minor />
                </div>
            </main>
        </div>
    )
}

export default Home;
