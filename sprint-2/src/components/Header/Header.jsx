import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Logo-brainflix.svg';
import SearchBox from './SearchBox';
import UploadButton from './UploadButton';

const Header = () => {
    return (
        <div className="header">
            <div className="header__content container">
                <div className="header__left">
                    <Link to="/">
                        <img src={logo} alt="BrainFlix" />
                    </Link>
                </div>

                <div className="header__right">
                    <SearchBox />
                    <div className="header__user-menu">
                        <Link to="/upload">
                            <UploadButton />
                            {/* <button className="header__upload-btn btn">Upload</button> */}
                        </Link>
                        <div className="header__user-avater-container"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;