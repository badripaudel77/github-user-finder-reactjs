import React from 'react';
import {Link} from 'react-router-dom';

import Alert from '../Alert/Alert';

const Navbar = () =>{
    
    const navbar_ul_style = {

               listStyleType:'none',
               backgroundColor:'black',
               marginTop : '0px',
               padding:'15px',
               height:'50px'
               
    };

    const navbar_li_style = {
        display : 'inline',
        margin:'20px',
       
    };

    const navbar_link ={
        color :'white',
        textDecoration : 'none'
    };

    return (
        <div>
               <ul style={navbar_ul_style}>
                        <li style={navbar_li_style}><Link to="/" style={navbar_link}>Home Page</Link></li>
                        <li style={navbar_li_style}><Link to="/about" style={navbar_link}>About Page</Link></li>
                        <li style={navbar_li_style}><Link to="/contact" style={navbar_link}>Contact Page</Link></li>

                </ul>

        <Alert message ="this is alert message " type = "Alert" />

         </div>
    );
}

export default Navbar;