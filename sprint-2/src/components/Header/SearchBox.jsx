import React, { Component } from 'react';
import searchIcon from '../../assets/icons/Icon-search.png';

class SearchBox extends Component {
    render() {
        return(
            <div className="header__search-container">
                {/* <img src={searchIcon} className="header__search-icon" /> */}
                <input type="search"
                placeholder="Search" 
                className="header__search-input" />
            </div>
        )
    }
}

export default SearchBox;