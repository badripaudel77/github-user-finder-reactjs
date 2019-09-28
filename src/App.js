import React, { Component } from 'react';
import Person from './Person/Person.js'; //.js is optional

class App extends Component {

  //State of the person
  state = {
    name : 'Badri paudel',
    age : 33,
    jobs : [{first : 'Software Developer',second:'Designer'}],
    showPersons: true
  }

  //switch the state or change the state.
  switchNameHandler = () =>{  
    console.log('it was clicked.');
  //dont mutate the state directly , use setState method omly!!!
  this.setState(
    {  
        jobs : [{first : 'Software Developer',second:'Data Scientist'}],
        age:22
});
}

//condtional rendering dynamically 
togglePersonHandler = ()  =>{

  const doesShow = this.state.showPersons;
  this.setState({showPersons: doesShow}); //it will be merged to state

}

//to change the name field dynamically
changeNameDynamic = (event) => {
  this.setState(
    {  
      //getting the input value
        name: event.target.value,
        jobs : [{first : 'Software Developer',second:'Data Scientist'}],
        age:22
});

}
  render() {
    //using inline style for the styling 
    const inlineStyle = {
    backgroundColor : 'gray',
    font : 'inherit',
    border: '1px solid brown',
    padding: '8px',
    cursor:'pointer'

    }

   let persons = null;
   if(this.state.showPersons) {
    persons = (

      <div>
    <Person 
           name={this.state.name} age ={this.state.age} 
           occupation={this.state.jobs[0].second} 
           click={this.switchNameHandler}
           dynamicChange={this.changeNameDynamic} />  

          <Person 
           name={this.state.name} age ={this.state.age} 
           occupation={this.state.jobs[0].first} 
           click={this.switchNameHandler}
           dynamicChange={this.changeNameDynamic} /> 

      </div>
     );
   }

    return (
      <div className="App" >
      
          <h1>Hi I am React App</h1>
          <p>Am I working properly?</p>
     
          <button 
            style={inlineStyle}
           onClick={this.togglePersonHandler}>Toggle Person</button> 

        {/* use the reference here */}
           {persons}
       </div>   
     
    );
  }
}

export default App;
