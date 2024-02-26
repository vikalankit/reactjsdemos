import React from 'react';


const Greeting = props => {
    const {name,age} = props
    return(
        <h1>Hello, {name} and age is {age}</h1>
    );
};





export default Greeting;