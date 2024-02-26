import React, { Component } from 'react'

export class ErrorHandler extends Component {
    constructor(props){
        super(props);
        this.state = {hasError: false, errorMsg:''}
    }
    static getDerivedStateFromError(error){
        return {hasError:true, errorMsg:'Error has occured.'}
    }
    componentDidCatch(error,errorInfo){
        console.log('error:',error);
        console.log('errorInfo:',errorInfo);
    }
    render() {
        if(this.state.hasError)
        {
            return<h1>{this.state.errorMsg}</h1>
        }
        return this.props.children;
    }
}

export default ErrorHandler
