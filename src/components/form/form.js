import React, { Component } from 'react';
import './form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name : '',
            last_name : '',
            emails : [
                {   
                    id:'email1',
                    email : '',
                    type:'WORK',
                }
            ],
            phones : [
                {   
                    id:'phone1',
                    phone : '',
                    type:'WORK',
                }
            ],
        };

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addNewEmail = this.addNewEmail.bind(this);
        this.addNewPhone = this.addNewPhone.bind(this);
        this.removePhone = this.removePhone.bind(this);
        this.removeEmail = this.removeEmail.bind(this);
    }

    handleFirstName(event) {
        this.setState({first_name: event.target.value});
    }
    
    handleLastName(event) {
        this.setState({last_name: event.target.value});
    }

    handleEmail(event) {
        var id = event.target.id;
        var emails = this.state.emails;
        if(id.indexOf('inputEmail') === 0){
            id = id.replace("inputEmail", "");
            emails.forEach((email) => {
                if(email.id === id){
                    email.email = event.target.value;
                }
            });
        }else if(id.indexOf('type') === 0){
            id = id.replace("type", "");
            emails.forEach((email) => {
                if(email.id === id){
                    email.type = event.target.value;
                }
            });
        }
        this.setState({emails: emails});
    }

    handlePhone(event) {
        var id = event.target.id;
        var phones = this.state.phones;
        if(id.indexOf('inputPhone') === 0){
            id = id.replace("inputPhone", "");
            phones.forEach((phone) => {
                if(phone.id === id){
                    phone.phone = event.target.value;
                }
            });
        }else if(id.indexOf('type') === 0){
            id = id.replace("type", "");
            phones.forEach((phone) => {
                if(phone.id === id){
                    phone.type = event.target.value;
                }
            });
        }
        this.setState({phones: phones});
    }

    handleSubmit(event) {
        // console.log(JSON.stringify(this.state));
        // var storage = localStorage.getItem('storage');
        // if(storage){
        //     storage = JSON.parse(storage);
        //     storage.push(this.state);
        //     localStorage.setItem('storage',JSON.stringify(storage));
        // }else{
        //     var contacts = [];
        //     contacts.push(this.state);
        //     localStorage.setItem('storage',JSON.stringify(contacts));
        // }

        var url = 'http://localhost:8080/api/contact';
        console.log('Request data', this.state);  
        fetch(url, {  
            method: 'POST',  
            headers: {  
            "Content-type": "application/json"  
            },  
            body: JSON.stringify(this.state) 
        })
        .then(function(response) {
            console.log('Request data', response);  
            if (response.status >= 400) {
            throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function (data) {  
            console.log('Request succeeded with JSON response', data);  
        })  
        .catch(function (error) {  
            console.log('Request failed', error);  
        });
    }

    addNewEmail(event){
        var emails = this.state.emails;
        var count = emails.length + 1;
        emails.push({
                    id : 'email'+count,
                    email : '',
                    type:'WORK',
                });
        this.setState({emails : emails});
    }

    addNewPhone(event){
        var phones = this.state.phones;
        var count = phones.length + 1;
        phones.push({
                    id : 'phone'+count,
                    phone : '',
                    type:'WORK',
                });
        this.setState({phones : phones});
    }

    removePhone(event){
        var phones = this.state.phones;
        var id = event.target.id;
        phones = phones.filter(function(obj) {
            return obj.id === id ? '' : obj;
        });
        this.setState({phones : phones});
    }

    removeEmail(event){
        var emails = this.state.emails;
        var id = event.target.id;
        emails = emails.filter(function(obj) {
            return obj.id === id ? '' : obj;
        });
        this.setState({emails : emails});
    }

    render() {
        var emails = [];
        if(this.state.emails !== ""){
            this.state.emails.forEach((e) => {
                    emails.push(
                        <div className="col-sm-12 np div-add">
                            <select className="col-sm-3 np" id={'type'+e.id} onChange={this.handleEmail} value={e.type}>
                                <option value="WORK" selected="selected">WORK</option>
                                <option value="PERSONAL">PERSONAL</option>
                            </select>
                            <input className="col-sm-8 np" id={'inputEmail'+e.id} name={'email'+e.id} type="email" onChange={this.handleEmail} placeholder="Enter the Email Address" value={e.email}/>
                            { this.state.emails.length > 1 ?<span className="icon-minus" id={e.id} onClick={this.removeEmail}>-</span> : '' }
                        </div>
                    );
            });
        }

        var phones = [];
        if(this.state.phones !== ""){
            this.state.phones.forEach((e) => {
                    phones.push(
                        <div className="col-sm-12 np div-add">
                            <select className="col-sm-3 np" id={'type'+e.id} onChange={this.handlePhone} value={e.type}>
                                <option value="WORK" selected="selected">WORK</option>
                                <option value="PERSONAL">PERSONAL</option>
                            </select>
                            <input className="col-sm-8 np" name={'phone'+e.id} id={'inputPhone'+e.id} type="contact" onChange={this.handlePhone} placeholder="Enter Contact No." value={e.phone}/>
                            { this.state.phones.length > 1 ? <span className="icon-minus" id={e.id} onClick={this.removePhone}>-</span> : '' }
                        </div>
                    );
            });
        }

        return (
                <form className="col-md-12 col-sm-12 col-xs-12 np" onSubmit={this.handleSubmit}>
                    <div className="form-group col-sm-12 np">
                        <label className="col-sm-2 np" htmlFor="inputFName">First Name</label>
                        <input className="col-sm-10" id="inputFName" type="text"  placeholder="Enter the First Name" value={this.state.first_name} onChange={this.handleFirstName}/>
                    </div>
                    <div className="form-group col-sm-12 np">
                        <label className="col-sm-2 np" htmlFor="inputLName">Last Name</label>
                        <input className="col-sm-10 np" id="inputLName" type="text"placeholder="Enter the Last Name" value={this.state.last_name} onChange={this.handleLastName}/>
                    </div>
                    <div className="form-group col-sm-12 np">
                        <div className="col-sm-12 np label-border">
                            <span className="col-sm-10 np">Email</span>
                            { this.state.emails.length < 2 ? <span className="icon-plus" onClick={this.addNewEmail}>+</span> : '' }
                        </div>
                        {emails}                               
                    </div>
                    <div className="form-group col-sm-12 np">
                        <div className="col-sm-12 np label-border">
                            <span className="col-sm-10 np">Phone</span>
                            { this.state.phones.length < 2 ? <span className="icon-plus" onClick={this.addNewPhone}>+</span> : '' }
                        </div>
                        {phones}                                 
                    </div>
                    <hr/>
                    <div className="col-md-12 np">
                        <button type="submit" className="btn btn-cancel">Cancel</button>
                        <button type="" className="btn btn-save">Save</button>
                    </div>
                </form>
        );
    }
}

export default Form;