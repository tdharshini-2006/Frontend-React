import { useState } from "react";

function Quiz(){
     const [selected, setSelected] = useState('');
     const [result, setResult] = useState('');

     const checkAnswer = () => {
          if (selected === 'Product'){
               setResult('Correct!');
          }else {
               setResult ('Wrong! Try again');
          }
     };
     return (
          <div>
               <h3>Which batch you are ?</h3>

               <label>
                    <input type="radio" value="Service" 
                    checked={selected === 'Service'}
                    onChange={(e) => setSelected(e.target.value)}
                    />
                    Service 
               </label>
               <br/>
               <label>
                    <input type="radio" value="Product" 
                    checked={selected === 'Product'}
                    onChange={(e) => setSelected(e.target.value)}
                    />
                    Product
               </label>
               <br/>
               <button onClick= {checkAnswer}>Check Answer</button>
               <h3>{result}</h3>
          </div>
     )
}
export default Quiz