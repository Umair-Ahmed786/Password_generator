// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Set the background color here
document.body.style.backgroundColor = 'black';
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
  // document.body.style.backgroundColor = 'black';
);
