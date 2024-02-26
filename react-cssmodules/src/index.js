import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Module1 from './Module1.tsx';
import Module2 from './Module2.tsx';

ReactDOM.render(
  <div>
    <Module1></Module1>
    <Module2></Module2>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
