import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header id="new-header" className="">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a href="#" className="navbar-brand">
                                Sample Logo 
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;