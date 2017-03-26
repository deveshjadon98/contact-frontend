import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {query: ''};
        this.handleQuery = this.handleQuery.bind(this);
    }

    handleQuery(event) {
        this.setState({query: event.target.value});
        this.props.handleQuery(event.target.value);
    }

    render() {
        return (
            <div className="form-group search-box col-sm-10 np">
                <span className="search-label">Quick Find Contacts</span>                                
                <input type="text" name="" className="col-sm-5 np" placeholder="Search" value={this.state.query} onChange={this.handleQuery}/>
            </div>
        );
    }
}

export default Search;