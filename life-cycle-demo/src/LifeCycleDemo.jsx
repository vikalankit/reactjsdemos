import React, { Component } from "react";

class LifeCycleDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            Message: 'Hello Ankit'
        }

        console.log('constructor called.')
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps called.');
        return null;
    }

    shouldComponentUpdate(){
        console.log('should component update');
        return false;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('get snapshot before update');
        console.log('Before Update, Message was:'+ prevState.Message);
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount called.');
    }

    changeMessage = ()=>{
        this.setState({Message:'Bye Ankit'});
    }
    render(){
        console.log('render called.')
        return (
        <div>
           {this.state.Message}<br/>
           <button onClick={this.changeMessage}>Update Message</button>
        </div>
        )
    }

    componentDidUpdate(){
        console.log('component did update');
        console.log('Updated Message:' + this.state.Message);
    }
}

export default LifeCycleDemo;