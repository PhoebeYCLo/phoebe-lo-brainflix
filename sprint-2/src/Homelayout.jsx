import React, { Component } from 'react'
import Header from './components/Header/Header';
// import Home from './components/Home/Home';
import Upload from './components/Upload/Upload';

 class Homelayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    {/* <Home /> */}
                    <Upload />
                </main>
            </div>
        )
    }
}

export default Homelayout;
