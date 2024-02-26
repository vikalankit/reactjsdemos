import React  from 'react';


class Welcome extends React.Component{
    render(){
        const {name,age} = this.props
        return(
            <h1>Welcome {name} and age is {age}</h1>
        )
    }
}


export default Welcome;