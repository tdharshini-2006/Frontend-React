import React from "react";
import {useState,useEffect} from 'react'

function Mousemove (){
     const[pos,setPos]=useState({x:0,y:0})
    useEffect(()=>{
        function mouse(event){
            setPos({x:event.clientX,y:event.clientY })
        }
        window.addEventListener("mousemove",mouse);
        return()=>{
            window.removeEventListener("mousemove",mouse)
        }
    })
    return(
        <div>
            <h2>X:{pos.x}</h2>
            <h2>Y:{pos.y}</h2>
        </div>
    )
}

export default Mousemove