import React, { Component } from 'react'

export default class Destructering extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Jack",
            surname:"Sparrow",
            job:"Pirate"
        }
    }
    render() {
        const {name,surname,job} = this.state
        const {weapon,vehicle} = this.props
        console.log(this.props);
        return (
            <div>
                <h1>state</h1>
                name : {name} <br/>
                surname : {surname} <br/>
                job : {job} <br/>
                <h1>Props</h1>
                weapon : {weapon} <br/>
                vehicle : {vehicle} <br/>
            </div>
        )
    }
}
