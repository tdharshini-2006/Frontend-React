import React from 'react'
import {useState} from 'react'
const Hide = () => {
     const [show,setShow]=useState(false);
     return(
          <div>
               <br></br>
               <button onClick={()=>setShow(!show)}>
                    {show?"hide":"show"}
               </button>
               {show && (<h1>Dharshini :)</h1>)}
          </div>
     )
}
export default Hide