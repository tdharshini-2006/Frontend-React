import React from 'react'
import { useState } from 'react'
const Login = () => {
      const[uname,setUsername]=useState('');
      const[pass,setPassword]= useState(''); 
     function handler(){
             console.log("username: ",uname);
               console.log("password: ",pass);

               alert("Login Successful");
     }
     return(
          <div>
               <h1>Login page</h1>
               <input type="text" value={uname} placeholder='username'
               onChange={(e)=>setUsername(e.target.value)}/>
               <br></br>
                <input type="password" value={pass} placeholder='password'
               onChange={(e)=>setPassword(e.target.value)}/>
               <br></br>
               <br></br>
               <button onClick={handler}><b>Login</b></button>
          </div>
     )
}
export default Login