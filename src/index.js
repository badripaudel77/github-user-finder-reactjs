import React from 'react';

import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import Welcome from './components/Welcome/Welcome';
import Navbar from './components/Navbar/Navbar';


const About = () =>{

    return <h2>Hello This is about page.</h2>
}

const Contact = () =>{

    return <h2>Hello This is contact page.</h2>
}

//this is the first one. Drop the comment to see the output.
ReactDOM.render(
       <BrowserRouter>
            <div>     

                     <Navbar />
                    <Route exact path="/" component={Welcome} />

                    <Route exact path="/about" component={About} />

                    <Route exact path="/contact" component={Contact} />

            </div>
    </BrowserRouter>
    
    ,document.getElementById('root'));

//this is for the assigment , just modify as required.
//ReactDOM.render(<Assignment />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
