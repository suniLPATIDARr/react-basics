import React, { Component } from 'react'

export default class ErrorBoundaries extends Component {
    constructor(props){
        super(props)
        this.state={
            hasError:false,
            error:"",
            errorInfo:""
        }
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
    componentDidCatch(error,errorInfo){
        console.log(error)
        console.log(errorInfo)
        this.setState({
            error,errorInfo
        })
    }
    render() {
        if(this.state.hasError){
            return (
                <div>
                   <h1>Error</h1>{this.state.error.toString()}
                   <h1>Error Info</h1>{this.state.errorInfo.componentStack}
                </div>
            )
        }else{
            return this.props.children
        }
       
    }
}
