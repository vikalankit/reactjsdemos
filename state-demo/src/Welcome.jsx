import React, {Component} from 'react';
class Welcome extends Component{
    constructor(){
        super();
        this.state={
            length:0
        }
    }

    onNameChange(name){
        this.setState({
            length:name.length
        })
    }

    render(){
        return(
            <div>
                <label>Enter Name: <input type="text" onChange={e=>this.onNameChange(e.target.value)} /> </label><br/>
                <label>Name Length:{this.state.length}</label>
            </div>
        )
    }
}

export default Welcome;