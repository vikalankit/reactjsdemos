import React,{Component} from 'react';
class NameLength extends Component{
    constructor(){
        super()
        this.state={
            length:0
        }
    }

    nameChange(name){
        this.setState({
            length:name.length
        })
    }
    render(){
        return(
            <div>
               <label>Enter Name:<input type="text" onChange={e=>this.nameChange(e.target.value)}/></label>
               <label>Your Name Length is:{this.state.length}</label>
            </div>
        )
    }
}

export default NameLength;