import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Users from './components/Users/Users';

import axios from 'axios';
import SearchUser from './components/Users/SearchUser';
import UserDetails from './components/Users/UserDetails';
import { PageNotFound } from './components/layouts/PageNotFound';
import About from './components/layouts/About';

 const App = () => {
    
    const[users, setUsers] = useState([]);
    const[user, setUser] = useState(null);
    const[repos, setRepos] = useState([]);
    const[isLoading, setIsLoading] = useState(false);

    const serchUsers = async () => {
        setIsLoading(true);
        const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        // console.log(res.data)
        setUsers(res.data);
        setIsLoading(false);
    };
 
    const onSearchUser = async (searchTerm) => {
       // console.log(searchTerm)
       setIsLoading(true);
       const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
       // console.log(res.data)
       setIsLoading(false);
       setUsers(res.data.items);
    };

    //get one user  /username
    const getSingleUser = async (username) => {
        // console.log(searchTerm)
        setIsLoading(true);
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        // console.log(res.data)
        setUser(res.data);
        setIsLoading(false);
     };

  //get one user's repos /username
  const getRepos = async (username) => {
    // console.log(searchTerm)
    setIsLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    // console.log(res.data)
    setRepos(res.data);
    setIsLoading(false);

 };
   const  onClearField = () => {
        setUsers([]);
        setIsLoading(false);
    };

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
                                            onSearchUser={onSearchUser}
                                            onClearField={onClearField}
                                            showClear = {users.length >0 ? true : false }
                                            />
                                            <div style={container}> 
                                                    { <Users users = {users} /> }
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
                                                        user={user}
                                                        userRepos = {getRepos}
                                                        repos = {repos}
                                                        getSingleUser = {getSingleUser}
                                                        loadiing = {isLoading}
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

const container = {
    margin:'50px'
};

export default App