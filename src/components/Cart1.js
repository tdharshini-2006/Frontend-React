import React from "react";
import { useState } from "react";

const Cart1 = () => {
    const[cart,setCart]=useState([]);
    const products=["Apple","Mango",'Banana','Orange'];

    const addCart=(item)=>{
        setCart([...cart,item]);
    }
    const removeCart=(index)=>{
        setCart(cart.filter((item,i)=>i!==index))//setCart(cart.filter((_,i)=>i!==index))
    }
    return(
        <div>
            <h2>Products</h2>
            {products.map((item)=>(
                <button key={item} onClick={()=>addCart(item)}>{item}</button>
            ))}
            <h2>Cart({cart.length})</h2>
            <ul>
                {cart.map((item,index)=>(
                    <li key={index}>{item}
                    <button on onClick={()=>removeCart(index)}> Remove {item}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Cart1