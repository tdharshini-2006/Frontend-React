import React from "react";
import { useState,useEffect } from "react";

function Fetch (){
     const [users,setUsers]=useState([])

     useEffect (()=> {
          fetch('https://jsonplaceholder.typicode.com/users')
          .then((response)=>response.json())
          .then ((data)=>setUsers(data))
          .catch((msg)=> console.log(msg))
     },[])
     return (
          <div> 
               <h1>FETCH 1</h1>
               {users.map((user)=> (
                    <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    </div>         
               ))}
          </div>
     )
}
export default Fetch