import React, { Component } from 'react';
import IconSearch from './IconSearch';

class SearchBox extends Component {
    render() {
        return(
            <div className="header__search-container input">
                <IconSearch />
                <input type="search"
                placeholder="Search" 
                className="header__search-input" />
            </div>
        )
    }
}

export default SearchBox;