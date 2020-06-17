import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Users from './components/Users/Users'

import axios from 'axios'
import SearchUser from './components/Users/SearchUser'
import UserDetails from './components/Users/UserDetails'
import { PageNotFound } from './components/layouts/PageNotFound'
import About from './components/layouts/About'

 class App extends Component {
    
    state = {
        users : [],
        user : null, //single user
        repos : [],
        isLoading : false 
    }

    async componentDidMount() {
        // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
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
       this.setState({ users : res.data.items, isLoading: false})
    }

    //get one user  /username
    getSingleUser = async (username) => {
        // console.log(searchTerm)
        this.setState({isLoading : true})
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        // console.log(res.data)
        this.setState({ user : res.data, isLoading : false})
     }
 //get one user  /username
 getRepos = async (username) => {
    // console.log(searchTerm)
    this.setState({isLoading : true})
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    // console.log(res.data)
    this.setState({ repos : res.data, isLoading : false})
 }
    onClearField = () => {
        this.setState({users : [],isLoading : false})
    }

    render() {
        return (
            <Router>
                    <div>
                            <div className="App">
                                <Navbar title = "Find Github Users" />
                            </div>
                            <Switch>
                                      {/* multiple component in one route  */}
                                      <Route exact path="/" render={(props) => (
                                        <>
                                            <SearchUser 
                                            onSearchUser={this.onSearchUser}
                                            onClearField={this.onClearField}
                                            showClear = {this.state.users.length >0 ? true : false }
                                            />
                                            <div style={container}> 
                                                    { <Users users = {this.state.users} /> }
                                            </div> 
                                        </>    
                                      )} 
                                      /> 

                                      {/* single router, just a single component */}
                                     <Route exact path="/about" component={About} />
                                     {/* show PageNotFound if any other url except definde  */}
                                     {/* for the single user like /user/username */} 
                                        <Route
                                            exact path='/users/:username/'
                                            render={ (props) => (
                                                        <UserDetails {...props } 
                                                        user={this.state.user}
                                                        userRepos = {this.getRepos}
                                                        repos = {this.state.repos}
                                                        getSingleUser = {this.getSingleUser}
                                                        loadiing = {this.state.isLoading}
                                                        />
                                                  )      
                                         }
                                        />
                                  <Route path="*" component={PageNotFound} /> 
                             </Switch> 
                        </div> 
            </Router>  
        )
    }
}
const container = {
    margin:'50px'
}
export default App