import React, { Component, Fragment } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

 class Navbar extends Component {
    render() {
        return (
            <div>
                    <h1>
                            <i className="fa fa-github-square"></i>
                                {this.props.title}
                            <Router>
                                    <> 
                                        <Link to="/" >Home</Link>
                                        <Link to="/about"> About App</Link>
                                    </>
                            </Router>
                    </h1>
            </div>
        )
    }
}

export default Navbar
