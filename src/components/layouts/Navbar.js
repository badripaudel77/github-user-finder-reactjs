import React, { Component } from 'react'

 class Navbar extends Component {
    render() {
        return (
            <div>
                    <h1>
                            <i className="fa fa-github-square"></i>
                                {this.props.title}
                    </h1>
            </div>
        )
    }
}

export default Navbar
