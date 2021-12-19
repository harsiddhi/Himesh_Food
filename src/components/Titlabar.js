// import React from 'react'

// export default function Titlabar(props) {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//         </div>
//     )
// }
import React, { Component } from 'react'

export default class Titlabar extends Component {
    constructor(props) {
        super(props)
    
        // this.state = {
             
        // }
    }
    
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}
