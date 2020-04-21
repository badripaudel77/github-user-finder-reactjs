import React from 'react';
import PropTypes from 'prop-types';

const Alert =(props) =>{

    return (
        <div style={{backgroundColor:'gray',height:'120px',textAlign:'center',paddingTop:'30px'}}>
        
         <h2>{`Message is : ${props.message}  Type is : ${props.type}`}</h2>
        </div>
    );
}

// prop
Alert.propTypes = {

    message : PropTypes.string.isRequired,
    type :PropTypes.string.isRequired
};

export default Alert;