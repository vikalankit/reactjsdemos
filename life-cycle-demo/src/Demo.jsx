import React, {Component} from 'react'
import ReactDOM from "react-dom";
class Demo extends Component{
    constructor(){
        super();
        this.state={count:0};
        console.log('constructor called');
    }

    increment = () =>{
        this.setState({count : this.state.count +1});
    }

    render(){
        console.log('render called');
        return(
            <div>
                <button onClick={this.increment}>{this.state.count}</button>
            </div>
        )
    }

    componentDidMount()
    {
        console.log("component did mount");
    }

    componentWillUnmount()
    {
        console.log('component will unmount');
    }
}

class DemoWrapper extends Component{
    render(){
        return(
        <div>
            <button onClick={this.mount.bind(this)}>Mount</button>
            <button onClick={this.unmount.bind(this)}>Unmount</button>
            <div id='demo1'></div>
        </div>
        );
    };

    mount(){
        ReactDOM.render(<Demo/>,document.getElementById('demo1'));
    }

    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('demo1'));
    }

   
}

 export default DemoWrapper;