import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//for the assignment
import Assignment from './Assignment';

//this is the first one. Drop the comment to see the output.
ReactDOM.render(<App />, document.getElementById('root'));

//this is for the assigment , just modify as required.
//ReactDOM.render(<Assignment />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
