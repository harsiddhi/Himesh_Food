import React, { Component } from 'react'
import Titlabar from './Titlabar'

export default class DemoClass extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
        this.demo = this.demo.bind(this)
    }

    demo() {
        this.setState({
            counter:this.state.counter+1
        })
    }
    
    render() {
        return (
            <div>
               
                {this.state.counter}
                <button onClick={this.demo}>Click</button>
            </div>
        )
    }
}
