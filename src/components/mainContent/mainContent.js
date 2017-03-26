import React, { Component } from 'react';
import ContactForm from './../contactForm/contactForm';
import ContactList from './../contactList/contactList';
import './mainContent.css';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.updateStateToForm = this.updateStateToForm.bind(this);
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
            ]
        };
    }

    componentWillMount(){
        var storage = localStorage.getItem('storage');
        console.log(storage);
        if(storage){
            storage = JSON.parse(storage);
            this.setState({contacts : storage});
        }
    }

    updateStateToForm(){
        this.props.formStateProp();
    }

    render() {
        return (
            <div className="wrapper-content col-md-9 col-sm-9 col-xs-9">
                <div className="tab-content tabs-wrapper col-md-12 col-sm-12 col-xs-12 np">
                    { this.props.toggleProp ? <ContactList formStateProp={ this.updateStateToForm } contactsData={this.state.contacts}/> :  <ContactForm />}
                </div>
            </div>
        );
    }
}

export default MainContent;