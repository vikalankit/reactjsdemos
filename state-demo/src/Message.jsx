import React,{Component} from 'react';
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome Guest'
        }
    }

    changeMessage()
    {
        this.setState({
            message:'Welcome to our channel Ankit Tech Classes'
        })
    }

    render(){
        return(
            <div>
                {this.state.message}<br/>
                <button onClick={()=>this.changeMessage()}>Click me</button>
            </div>
        )
    }
}

export default Message;