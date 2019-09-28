import React,{Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class Assignment extends Component {

    //class that extends component only can have state i.e. functional component can't have state.
   state = {
     
    userName : 'Badri Upadhyay'

   }

    userNameChangeHandler = (event) =>{

        this.setState(  {userName: event.target.value} )
   }

    render() {

        return (

    <div>

            <p>this is the list</p>
            
        <ol align="center">
            
            <li>Number1</li>
            <li>Number2</li>
            <li>Number3</li>
            <li>Number3</li>
            <li>Number5</li>

        </ol>
          
          <UserInput changed ={this.userNameChangeHandler}
          currentUserName={this.state.userName} />
          
          <UserOutput userName={this.state.userName} />
          <UserOutput userName="Badri Paudel" />
    </div>
         
        );
    }
}
export default Assignment;