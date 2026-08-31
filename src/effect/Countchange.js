import React from "react";
import {useState,useEffect} from 'react'

function Countchange (){
     const [count,setCount]=useState(0)
     useEffect (()=>{
          document.title=`count:${count}`;
     },[count])
     return(
          <div>
               <h1>Count: {count} </h1>
               <button onClick={()=>setCount(count+1)}>Increase count</button>
          </div>
     )
}

export default Countchange