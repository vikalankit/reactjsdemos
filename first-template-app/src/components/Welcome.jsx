import React from 'react';
import { Component } from 'react';

class Welcome extends Component{
   render(){
       return(
           <h1>Welcome to {this.props.name}</h1>
       );
   }
}

Welcome.defaultProps = {
    name:"Alok"
}

export default Welcome;