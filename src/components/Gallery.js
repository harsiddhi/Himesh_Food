import React, { Component } from 'react'
const imagdata = {
 height:"300px" ,
 width:"300px"
}
export default class Gallery extends Component {
    render() {

        return (
            <div>
               
             <div class='container'>
                 <div class='row'>
                     <div class='col-sm-3'>
                         <img src='./images/1.jpg' style={imagdata}></img>
                     </div>
                 </div>
             </div>
            </div>
        )
    }
}
