import React, { Component } from 'react'
import Header from './components/Header/Header';
import Home from './components/Home/Home';

 class Homelayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <Home />
                </main>
            </div>
        )
    }
}

export default Homelayout;
