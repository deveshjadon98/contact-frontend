import React, { Component } from 'react';
import ContactForm from './../contactForm/contactForm';
import ContactList from './../contactList/contactList';
import './mainContent.css';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts : [
                // {
                //     first_name : 'devesh',
                //     last_name : 'jadon',
                //     emails : [{
                //         type : 'personal',
                //         email : 'jadon.devesh98@gmail.com'
                //     },
                //     {
                //         type : 'work',
                //         email : 'devesh.jadon@venturepact.com'
                //     }],
                //     phones : [{
                //         phone : '9780080358',
                //         type : 'personal'
                //     },
                //     {
                //         phone : '9457101364',
                //         type : 'work'
                //     }],
                // }
            ],
            searchResult : [],
            regRx : '',
        };
        this.updateStateToForm = this.updateStateToForm.bind(this);
        this.paginatedResult = this.paginatedResult.bind(this);
        this.updateStateSearchResult = this.updateStateSearchResult.bind(this);
    }

    updateStateSearchResult(value){
        // console.log('SEARCH QUERY',value);
        var data = this.state.contacts;
        var regEx = new RegExp(value, 'gi');
        data = data.filter(function(elem){
            return ( value === '' || elem.first_name.match(regEx) || elem.last_name.match(regEx) ) ? elem : '';
        });
        this.setState({searchResult : data.slice(0, 4),regEx : regEx});
    }

    paginatedResult(value){

        value = parseInt(value, 10);
        // console.log('paginatedResult QUERY',value);
        var start = value === 1 ? 0 : Math.pow(2, value); 
        var end = Math.pow(2, value + 1); 
        var data = this.state.contacts;
        data = data.filter(function(elem){
            return ( this.state.regEx === '' || elem.first_name.match(this.state.regEx) || elem.last_name.match(this.state.regEx) ) ? elem : '';
        }.bind(this));
        this.setState({searchResult : data.slice(start, end)});
    }

    componentDidMount(){
        // var storage = localStorage.getItem('storage');
        // console.log(storage);
        // if(storage){
        //     storage = JSON.parse(storage);
        //     this.setState({contacts : storage});
        // }
        var that = this;
        var url = 'http://localhost:8080/api/contacts'

        fetch(url)
        .then(function(response) {
            if (response.status >= 400) {
            throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function(data) {
            let storage = data.data;
            that.setState({contacts : storage,searchResult : storage.slice(0, 4)});
        });
    }

    updateStateToForm(){
        this.props.formStateProp();
    }

    render() {
        return (
            <div className="wrapper-content col-md-9 col-sm-9 col-xs-9">
                <div className="tab-content tabs-wrapper col-md-12 col-sm-12 col-xs-12 np">
                    { this.props.toggleProp ? <ContactList updateStateSearchResult={this.updateStateSearchResult} formStateProp={ this.updateStateToForm } contactsData={this.state.searchResult} paginatedResult={this.paginatedResult} totalCount={this.state.contacts.length}/> :  <ContactForm />}
                </div>
            </div>
        );
    }
}

export default MainContent;