import React, { Component } from 'react'

import './App.css'
import Navbar from './components/layouts/Navbar'
import UserItem from './components/Users/UserItem'
import Users from './components/Users/Users'

 class App extends Component {
    render() {
        return (
           <div> 
            <div className="App">
                 <Navbar title = "Github Finder" />
            </div>
          <UserItem />
         </div>  
        )
    }
}

export default App
