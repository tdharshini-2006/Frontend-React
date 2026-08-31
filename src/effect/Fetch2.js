import {useState,useEffect} from 'react'

const Fetch2 = () => {
     const [users,setUsers]=useState([])

     useEffect(()=> {
          getuservalues()
     },[])

     const getuservalues=async()=> {
          const response=await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          setUsers(data);
     }
     return (
          <div> 
               <h1>FETCH 2</h1>
               {users.map((user)=> (
                    <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.phone}</p>
                    </div>         
               ))}
          </div>
     )
}
export default Fetch2