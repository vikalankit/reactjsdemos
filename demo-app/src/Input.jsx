import React, { Component } from 'react'
import TextViewer from './TextViewer';

export class Input extends Component {
    constructor(){
        super();
        this.state={
            data:'10'
        };
        this.onTextChange = this.onTextChange.bind(this);
    }
    onTextChange(event) {
        console.log('val:',event.target.value);
        this.setState({data:10});
    }
    render() {
        return (
            <div>
               <button  onClick = {()=>this.setState({data:11})}>Click ME</button>
                <TextViewer name={this.state.data}/>
            </div>
        )
    }
}

export default Input

