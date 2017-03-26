import React, { Component } from 'react';
import ListData from './../listData/listData';
import Search from './../search/search';
import './contactList.css';

class ContactList extends Component {
    render() {
        return (
            <div className="" id="contactList">
                <div className="col-md-12 np">
                    <h4 className="tab-heading">Contact List</h4>
                    <Search />
                    <button type="" onClick={this.props.formStateProp} className="btn btn-adContact">Add Contact</button>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12 np">
                    <ListData contactsData={this.props.contactsData}/>
                </div>
            </div>
        );
    }
}

export default ContactList;