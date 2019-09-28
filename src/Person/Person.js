import React from 'react';
import './Person.css'; //we need to import css as well

//in app.js file click was passed as a reference to the new component(other component)
const person = (props)=> {

    return (
    
      <div className="Person">

          <p onClick={props.click}>I am {props.name} and I am {props.age} age years old. I am {props.occupation}</p>
          <input type="text" onChange={props.dynamicChange}  value={props.name}/>
     
     </div>
   );
      
};
export default person;
