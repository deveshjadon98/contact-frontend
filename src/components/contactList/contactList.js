import React, { Component } from 'react';
import ListData from './../listData/listData';
import Search from './../search/search';
import './contactList.css';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.updateStateSearchResult = this.updateStateSearchResult.bind(this);
        this.paginatedResult = this.paginatedResult.bind(this);
    }

    updateStateSearchResult(value){
        this.props.updateStateSearchResult(value);
    }

    paginatedResult(value){
        this.props.paginatedResult(value);
    }

    componentWillMount(){
        console.log('this.props.contactsData',this.props.contactsData)
        this.setState({contacts : this.props.contactsData});
    }

    render() {
        return (
            <div className="" id="contactList">
                <div className="col-md-12 np">
                    <h4 className="tab-heading">Contact List</h4>
                    <Search handleQuery={this.updateStateSearchResult}/>
                    <button type="" onClick={this.props.formStateProp} className="btn btn-adContact">Add Contact</button>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12 np">
                    <ListData contactsData={this.props.contactsData} paginatedResult={this.paginatedResult} totalCount={this.props.totalCount}/>
                </div>
            </div>
        );
    }
}

export default ContactList;