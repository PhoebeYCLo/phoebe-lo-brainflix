import React from 'react';
import logo from '../../assets/logo/Logo-brainflix.svg';
import SearchBox from './SearchBox';

const Header = () => {
    return (
        <div className="header">
            <div className="header__content container">
                <div className="header__left">
                    <img src={logo} alt="BrainFlix" />
                </div>

                <div className="header__right">
                    <SearchBox />
                    <div className="header__user-menu">
                        <button className="header__upload-btn btn">Upload</button>
                        <div className="header__user-avater-container"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;