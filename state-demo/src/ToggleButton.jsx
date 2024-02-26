import React, { Component } from 'react';

class ToggleButton extends Component{
    constructor(props){
        super(props);
        this.state = {isToggle: props.isToggle};
        //this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log('this is:'+this);
        this.setState(
            state => (
                {
                    isToggle: !state.isToggle
                }
            )
        );
    }
    // handleClick = () =>{
    //     console.log('this is:'+this);
    //     this.setState(state=>({
    //         isToggle : !state.isToggle
    //     }));
    // }

    render(){
        return(
            <button onClick={() => this.handleClick()}>
                {this.state.isToggle ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default ToggleButton;