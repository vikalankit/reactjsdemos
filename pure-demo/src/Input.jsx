import React, { Component } from 'react'
import TextViewer from './TextViewer';

export class Input extends Component {
    constructor(){
        super();
        this.state={
            name:''
        };
    }
    onTextChange(val) {
        this.state={
            name:val
        }
    }
    render() {
        return (
            <div>
                <input type='text' onChange={this.onTextChange(this)} />
                <TextViewer name={this.state.name}/>
            </div>
        )
    }
}

export default Input

