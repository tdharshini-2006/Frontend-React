import React from "react";
import { useState } from "react";
const Rating = () => {
    const[rating,setRating]=useState(0);
    return(
        <div>
            <h2>Rating</h2>
            {[1,2,3,4,5].map((star)=>(
                <button key={star} onClick={()=>setRating(star)}
                style={{color:star<=rating?'yellow':'white'}}>*</button>
            ))}
            <p>Your rated: {rating}/5</p>
        </div>
    )
}
export default Rating;