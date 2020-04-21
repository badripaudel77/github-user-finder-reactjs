import React from 'react';

import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Welcome from './components/Welcome/Welcome';
import Navbar from './components/Navbar/Navbar';


const About = () =>{

    return <h2>Hello This is about page [React Router].</h2>
}

const Contact = () =>{

    return <h2>Hello This is contact page [React Router].</h2>
}
const style = {
             
    backgroundColor : 'green',
    color : 'white',
    margin :'auto',
    width:'400px',
    height:'300px',
    textAlign:'center'
 };
//this is the first one. Drop the comment to see the output.
ReactDOM.render(

    <Router>
        <div>     
                <Navbar /> 
                <div style={style}> 
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Redirect to="/" ></Redirect>
                </div>

        </div>

</Router>
    
    ,document.querySelector('#root'));

serviceWorker.unregister();
