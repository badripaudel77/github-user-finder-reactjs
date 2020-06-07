import React, { Component } from 'react'

 class SearchUser extends Component {
         state = {
             searchTerm : ""
         }
          onInputChange = (e) => {
              //easier if we have multiple fields like name,email, .........
            this.setState({[e.target.name] : e.target.value }) //looks for name searchTerm
         }
         onFormSubmit = (e) => {
             e.preventDefault();
             this.props.onSearchUser(this.state.searchTerm)
             this.setState({searchTerm : ""})
         }

         onClearField = (e) =>{
             this.props.onClearField();
             e.preventDefault();
         }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name= "searchTerm"  
                    placeholder="search user ....... "
                    style={searchUserStyle}
                    onChange={this.onInputChange}
                    value={this.state.searchTerm}
                    />
                    <input
                     type="submit" value= "Search User" 
                     style={submitStyle}
                     disabled={this.state.searchTerm.length >=1 ?false : true }
                     />
                     {
                        this.props.showClear &&  
                        <input
                        type="button" value= "Clear All" 
                        style={clearStyle}
                        onClick={this.onClearField}
                        />
                   }
                </form>
            </div>
        )
    }
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
