import React, { Component } from 'react';
import './singleRecord.css';

class SingleRecord extends Component {
    render() {
        var record = this.props.data;
        var emails = [];
        var phones = [];
        if(record !== ""){
            record.emails.forEach((e) => {
                    emails.push(<p><b>{e.type}</b> : {e.email}</p>);
            });
            record.phones.forEach((e) => {
                    phones.push(<p><b>{e.type}</b> : {e.phone}</p>);
            });
        }
        return (
            <tr>
                <td>{this.props.count}</td>
                <td>{record.first_name+' '+record.last_name}</td>
                <td>{emails}</td>
                <td>{phones}</td>
            </tr>
        );
    }
}

export default SingleRecord;