import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    render() {
        return (
            <div className="form-group search-box col-sm-10 np">
                <span className="search-label">Quick Find Contacts</span>                                
                <input type="text" name="" className="col-sm-5 np" value="" placeholder="Search" />
            </div>
        );
    }
}

export default Search;