import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const UserItem = (props) => {    

  if(!props.user) return;

  const {login, avatar_url } = props.user; 
  //console.log(login, "useritem.js");
  // console.log(this.props.user)  
   return (
                
                     <div style={userStyle}>
                           <img src={avatar_url} alt="image" width= "100%" height="60%"/><br />
                           {login} <br /> <br />
                         <Link to={`/users/${login}`}  style={linkStyle}>More</Link>
                     </div>
                      )
    }

     const userStyle = {
        width : '200px',
        height :'250px',
        textAlign : 'center',
        textTransform : 'capitalize',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    }

    const linkStyle = {
     backgroundColor : 'green',
     color : 'white',
      padding : '10px'     
     }

    export default UserItem;
