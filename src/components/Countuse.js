import React from 'react'
import {useState} from 'react'
const Countuse = () => {
     const [count,setCount]=useState(0);
     return(
          <div>
               <h1>Counter App</h1>
               <h2>Counter:{count}</h2>
               <button onClick={()=>setCount(count+1)}>Increment</button>
               <button onClick={()=>setCount(count-1)}>Decrement</button>
          </div>
     )
}

export default Countuse