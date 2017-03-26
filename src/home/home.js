import React, { Component } from 'react';
import './home.css';
import Header from './../components/header/header';
import Container from './../components/container/container';
class Home extends Component {

  render() {
    return (
        <div>
            <Header />
            <Container />
        </div>
    );
  }
}

export default Home;
