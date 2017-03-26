import React, { Component } from 'react';
import './container.css';
import Sidebar from './../sidebar/sidebar';
import MainContent from './../mainContent/mainContent';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:true, 
        };
        this.updateStateToForm = this.updateStateToForm.bind(this);
        this.updateStateToList = this.updateStateToList.bind(this);
    }

    updateStateToForm(){
        this.setState({ list: false });
    }

    updateStateToList(){
        this.setState({ list:true });
    }

    render() {
        return (
            <section className="wrapper">
                <div className="col-md-12 col-sm-12 col-xs-12 np">
                    <Sidebar myDataProp={this.state.list} formStateProp={ this.updateStateToForm } listStateProp={ this.updateStateToList }/>
                    <MainContent toggleProp={this.state.list} formStateProp={ this.updateStateToForm }/>
                </div>
            </section>
        );
    }
}

export default Container;