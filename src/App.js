import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Navbar from './components/layouts/Navbar'
import Users from './components/Users/Users'

import axios from 'axios'
import SearchUser from './components/Users/SearchUser'
import { PageNotFound } from './components/layouts/PageNotFound'
import About from './components/layouts/About'
 class App extends Component {
    
    state = {
        users : [],
        isLoading : false 
    }

    async componentDidMount() {
        console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
         this.setState({isLoading: true})
         const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        // console.log(res.data)
         this.setState({ users : res.data})
    }
 
    onSearchUser = async (searchTerm) => {
       // console.log(searchTerm)
       this.setState({isLoading : true})
       const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
       // console.log(res.data)
       this.setState({ users : res.data.items})
    }
    onClearField = () => {
        this.setState({users : [],isLoading : false})
    }

    render() {
        return (
            
            <div>
                        <div className="App">
                            <Navbar title = "Github Finder" />
                        </div>            
                                <SearchUser 
                                    onSearchUser={this.onSearchUser}
                                    onClearField={this.onClearField}
                                    showClear = {this.state.users.length >0 ? true : false }
                                    />
                        
                                    <div style={container}> 
                                            { <Users users = {this.state.users} /> }
                                    </div>  
            </div> 
        )
    }
}
const container = {
    margin:'50px',
}
export default App