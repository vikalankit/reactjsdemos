import React, { Component } from 'react'

export class TextViewer extends Component {
    constructor(props){
        super(props);
        console.log('props:',props);
        this.state={
            name:props.name,
            count:0
        }
    }
    // componentDidUpdate(){
    //     this.state={
    //         count:this.state.count +1
    //     }
    // }
    render() {
        return (
            <div>
                Component Updated:Count:{this.state.count}
                <p>Welcome : {this.state.name}</p>
            </div>
        )
    }
}

export default TextViewer
