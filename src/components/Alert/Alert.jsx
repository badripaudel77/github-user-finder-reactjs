import React from 'react';
import PropTypes from 'prop-types';

const Alert =({message, type}) =>{

    return (
        <div style={{backgroundSize:'20px',backgroundColor:'gray'}}>
        
         <h2>{`Message is : ${message}  Type is : ${type}`}</h2>
        </div>
    );
}

// prop
Alert.propTypes = {

    message : PropTypes.string.isRequired,
    type :PropTypes.string.isRequired
};

export default Alert;