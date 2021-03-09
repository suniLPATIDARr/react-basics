import React, { Component } from 'react'

export default class CounterDemo extends Component {
    constructor(props){
        super(props)
        this.state={
            counter:1
        }
    }
    handleClick=(e)=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    render() {
        if(this.state.counter>=5){
            throw new Error("Counter is Blast")
        }
        return (
            <div>
                {this.state.counter}
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}
