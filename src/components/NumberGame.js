import React from "react";
import { useState } from "react";

const NumberGame = () => {
     const [target]=useState(Math.floor(Math.random()*100))
     const [ guess,setGuess]=useState('')
     const [message,setMessage]=useState('')

     const check = ()=>{
          const num=Number(guess);
          if(num===target){
               setMessage('you guessed it right')
          }
          else if(num<target){
               setMessage("too low")
          }
          else{
               setMessage('too high')
          }
     }
     return (
          <div>
               <h2>Guess a number (0-100) </h2>
               <input type="number" value={guess}
               onChange = {(e)=> setGuess (e.target.value)}/>
               <button onClick={check}>check</button>
               <p>{message}</p>
          </div>
     )
}
export default NumberGame