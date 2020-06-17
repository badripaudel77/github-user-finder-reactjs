import React, { Component, useEffect } from 'react'

import PropTypes from 'prop-types'

import styles from './UserDetails.module.css'
import { Repos } from '../repos/Repos';


const UserDetails = (props) => {

    useEffect(() => {
        props.getSingleUser(this.props.match.params.username);
        props.userRepos(this.props.match.params.username);
    },[])
    //console.log(props.user)
        const { user, loading } = props;
            //console.log(this.props)
        if(loading || !props.user) {
            return <div>User is Loading, Please wait. </div>
        }
        return (
                    <div className={styles.udContainer}>
                        <img 
                        style={imageStyle}
                        src={user.avatar_url} 
                        alt="image not found"
                        width="250px"
                        height="250px"
                        />
                        <div style={bioStyle}>
                            <h2>Bio</h2>
                            <p>{user.bio}</p>
                            <div>
                                <h3>Repositories : </h3>
                                <Repos repos={props.repos}/>
                           </div> 
                        </div>
        
                        <h1>Name : {user.name}</h1>  
                        <h3>Followers : {user.followers}</h3>
                        <h3>Following  : {user.following}</h3>
                        <p> Location : {user.location} </p>
                        <a style ={{textDecoration : 'none', background : 'green', color:'white',padding:'7px'}}
                         target="_blank"
                         href={user.html_url} >Actual Profile</a>
                    </div> 
        )
        }

const imageStyle = {
    borderRadius : '50%',
    margin : 'auto'
}
const bioStyle = {
    display : 'inline',
    margin : 'auto',
    float :  'right',
    width : '60%',
    boxShadow: '5px 10px #888888'
}

UserDetails.propTypes = {
    //loading : PropTypes.bool.isRequired,
    user : PropTypes.object,
    userRepos : PropTypes.func,
    repos : PropTypes.array
   }

   export default UserDetails;