import React, { Component } from 'react';
import './pagination.css';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.paginatedResult = this.paginatedResult.bind(this);
    }

    paginatedResult(event){
        // console.log('event.target.value',event.target.text);
        this.props.paginatedResult(event.target.text);
    }

    render() {
        var count = Math.ceil(this.props.totalCount/4);
        var indents = [];
        if(count > 1){
            for(var i = 1 ; i <= count ; i++){
                indents.push( <li className={ i === 1 ? 'active' : ''}><a onClick={this.paginatedResult}>{i}</a></li> );
            }
        }
        return (
            <ul className="pagination pull-right">
                {indents}
            </ul>
        );
    }
}

export default Pagination;