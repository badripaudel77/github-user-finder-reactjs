import React, { useEffect } from 'react'
import UserItem from './UserItem'

 const Users = (props) =>{   
       // console.log("in users", this.props.users)
        return (
            <div style={userStyle}>
                  { 
                        props.users.map(user =>(
                           <UserItem key ={user.id} user={user} />
                       ))
                   }
            </div>
        )
    }
const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap : '7px'
}
export default Users
