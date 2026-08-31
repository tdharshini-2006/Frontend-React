import { useState } from "react";

const Theme = () => {
     const [dark,setdark]=useState(false);
     const style={
          backgroundColor:dark?"black ":"white",
          color:dark?"white":"black"
     }
     return (
          <div style={style}>
               <h1>{dark?"Dark Mode":"Light Mode" }</h1>
                <button onClick={()=>setdark(!dark)}>change</button>
          </div>
     )
}
export default Theme