import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            title:''
        }
    }
    componentDidMount(){
        console.log('componentDidMount called:')
        document.title=`You clicked ${this.state.count} times`;
    }
    componentDidUpdate(prevProp,prevState)
    {
        if(prevState.count !== this.state.count){
            console.log('componentDidUpdate called:')
            document.title=`You clicked ${this.state.count} times`;
        }
    }
    render() {
        console.log('render:')
        return (
            <div>
                You clicked {this.state.count} times
                <div>
                    Title:
                    <input type='text'
                    onChange={(e)=>this.setState({title:e.target.value})} />
                </div>
                <div>
                    <button onClick={()=> this.setState({count:this.state.count + 1})}>
                        Add Counter
                    </button>
                </div>
            </div>
        )
    }
}

export default ClassCounter
