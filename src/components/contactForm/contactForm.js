import React, { Component } from 'react';
import Form from './../form/form';
import './contactForm.css';

class ContactForm extends Component {
    render() {
        return (
            <div className="" id="contactForm">
                <div className="col-md-12 np">
                    <h4 className="tab-heading">Contact Form</h4>
                    <button type="" className="btn btn-adContact">Add Contact</button>
                </div>
                <div className="col-md-8 col-sm-8 col-xs-12 np">
                    <Form />
                </div>
            </div>
        );
    }
}

export default ContactForm;