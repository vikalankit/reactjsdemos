import React,{Component} from 'react';
import {ThemeContext} from './ThemeContext';
class ThemedButton extends Component{
    static contextType = ThemeContext;
    render(){
        return(
            <button style={{backgroundColor:this.context.background,color:this.context.foreground}}>Click ME!</button>
        );                                                                                                                                                                                                      
    }
}

//ThemedButton.contextType = ThemeContext;
export default ThemedButton;