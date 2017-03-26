import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home/home';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './index.css';

ReactDOM.render((
  <Router>
      <Route exact path="/" component={Home} />
   </Router>
),
  document.getElementById('root')
);
