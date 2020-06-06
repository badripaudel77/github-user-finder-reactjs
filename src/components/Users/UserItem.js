import React, { Component } from 'react'

class UserItem extends Component {    

 render() {

  const {login, avatar_url,html_url,repos_url } = this.props.user; 
  // console.log(this.props.user)  
   return (
                
                     <div style={userStyle}>
                           <img src={avatar_url} alt="image" width= "100%" height="60%"/><br />
                           {login} <br /> <br />
                            <a href={html_url} target="_blank" style={linkStyle}>More</a>
                     </div>
        )
    }
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
