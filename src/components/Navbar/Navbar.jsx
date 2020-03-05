import React from 'react';
import {Link} from 'react-router-dom';
import Alert from '../Alert/Alert';



const Navbar = () =>{

    return (

        <div>
                    <ul>
                                <li><Link to="/">Home Page</Link></li>
                                <li><Link to="/about">About Page</Link></li>
                                <li><Link to="/contact">Contact Page</Link></li>

                    </ul>

                    <Alert message ="this is alert message " type = "Alert " />

         </div>
    );
}

export default Navbar;