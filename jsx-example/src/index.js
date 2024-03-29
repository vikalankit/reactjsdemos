import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var customStyle = {
  color:'blue',
  fontSize:50
};

const element = (
<div>
  <h1>
    <p style={customStyle}>I am using style</p>
  </h1>
</div>

);

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
