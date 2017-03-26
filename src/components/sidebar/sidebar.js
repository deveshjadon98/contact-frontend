import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = { 
            list: this.props.myDataProp ? 'active' : '',
            form: this.props.myDataProp ? '' : 'active'
        };
    }
    render() {
        return (
            <div className="left-sidebar col-md-3 col-sm-3 col-xs-3 np">
                <div id="" className="tabbable tabs-left">
                    <ul>
                        <li className={this.state.list}>
                            <a onClick={this.props.listStateProp} data-toggle="tab" className="">Contact List</a>
                        </li>
                        <li className={this.state.form}>
                            <a onClick={this.props.formStateProp} data-toggle="tab" className="">Contact Form</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;