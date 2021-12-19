import React from 'react'
import Titlabar from './Titlabar'

export default function Home() {
    // counter = 0
    let counter = 0 ;
    function demo()
    {
        // let counter = 0
        // counter=  counter+ 1;
        //     console.log(counter)
    }
    return (
        <div>
           <Titlabar title="Our Products"/>
           <p>{counter}</p>
           <button onClick={demo}>Click</button>
        </div>
    )
}
