import React, { Component } from 'react';
import SingleRecord from './../singleRecord/singleRecord';
import Pagination from './../pagination/pagination';
import './listData.css';

class ListData extends Component {
    constructor(props) {
        super(props);
        this.paginatedResult = this.paginatedResult.bind(this);
    }
    
    paginatedResult(value){
        this.props.paginatedResult(value);
    }

    render() {
        var indents = [];
        var count = 1;
        if(this.props.contactsData !== ""){
            this.props.contactsData.forEach((e) => {
                indents.push(<SingleRecord data={e} count={count}/>);
                count++;
            });
        }else{
            indents.push(<h1>NO POSTS.</h1>);
        }

        return (
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Contact No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {indents}                     
                    </tbody>
                </table>
                <Pagination contactsData={this.props.contactsData} paginatedResult={this.paginatedResult} totalCount={this.props.totalCount}/>
            </div>
        );
    }
}

export default ListData;