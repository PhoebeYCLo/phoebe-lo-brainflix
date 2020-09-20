import React from 'react';
import Player from '../Player/Player';
import Main from './Main';

 const Home = () => {
    return (
        <div className="home">
            <Player />
            <main className="home__content container">
                <div className="home__main">
                    <Main />
                </div>
            </main>
        </div>
    )
}

export default Home;
