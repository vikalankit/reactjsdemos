import React, {Component} from 'react';

class RefDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : 0
        };
    }
    addValues(){
        let no1 = Number(this.refs.n1.value);
        let no2 = Number(this.refs.n2.value);
        this.setState({data: no1 + no2});
    }
    render(){
        return(
            <div>
                No1 : <input type="text" ref="n1" /><br/>
                No2: <input type="text" ref="n2" /><br/>
                <button onClick={() => this.addValues()}>Add</button><br/>
                Result:{this.state.data}
            </div>
        )
    }
}

export default RefDemo;