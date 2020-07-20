import React, { useState } from 'react'

 const SearchUser = ({onSearchUser, onClearField, showClear }) => {

    const [searchTerm, setSearchTerm] = useState("");
        
    const  onInputChange = (e) => {
              //easier if we have multiple fields like name,email, .........
            setSearchTerm(e.target.value) //looks for name searchTerm
         };
        const onFormSubmit = (e) => {
             e.preventDefault();
             onSearchUser(searchTerm)
             setSearchTerm("")
         };

        const onAllClearField = (e) =>{
             onClearField();
             e.preventDefault();
         };

        return (
            <div>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name= "searchTerm"  
                    placeholder="search user ....... "
                    style={searchUserStyle}
                    onChange={onInputChange}
                    value={searchTerm}
                    />
                    <input
                     type="submit" value= "Search User" 
                     style={submitStyle}
                     disabled={searchTerm.length >=1 ? false : true }
                     />
                     {
                        showClear &&  
                        <input
                        type="button" value= "Clear All" 
                        style={clearStyle}
                        onClick={onAllClearField}
                        />
                    }
                </form>
            </div>
        )
    }

const searchUserStyle = {
         width:'90%',
         height:'20px',
         padding:'5px',
         marginLeft : '5%',
         marginTop : '15px'

}
const submitStyle = {
    width:'91%',
    height:'30px',
    padding:'5px',
    marginLeft : '5%',
    marginTop : '15px',
    backgroundColor : 'blue',
    // color : 'white'
}

const clearStyle = {
    width:'91%',
    height:'30px',
    padding:'5px',
    marginLeft : '5%',
    marginTop : '15px',
    backgroundColor : 'pink',
    color : 'black',
    fontWeight : 'bold'

}

export default SearchUser
