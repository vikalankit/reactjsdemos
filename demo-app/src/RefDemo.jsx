import React, { Component } from 'react';

class RefDemo extends Component{
    constructor(props){
        super(props);
         this.state = {
             data:0
         };
    }

    addValues(){
      let no1 = Number(this.refs.text1.value);
      let no2 = Number(this.refs.text2.value);
     
      this.setState({data:no1 + no2});
    }
    render(){
        return(
            <div>
                    <input type="text"  ref="text1" />
                    <input type="text"  ref="text2" />
                    <button onClick={() => this.addValues()} >Add</button>
                    Result:{this.state.data}

            </div>
        );
    }
}

export default RefDemo;