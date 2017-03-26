import React, { Component } from 'react';
import './pagination.css';

class Pagination extends Component {
    render() {
        return (
            <ul className="pagination pull-right">
                <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
            </ul>
        );
    }
}

export default Pagination;