import React, { Component, Fragment } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

import styles from './Navbar.module.css'

 class Navbar extends Component {
    render() {
        return (
                <div className={styles.Navbar}>   
                 <h1>
                     <i className="fa fa-github-square"></i>
                     {this.props.title}   
                            <div className={styles.linkStyle}> 
                                    <Link to="/" >Home</Link> 
                                    <Link to="/about"> About App</Link>
                            </div> 
                        </h1>          
               </div>
        )
    }
}
export default Navbar
