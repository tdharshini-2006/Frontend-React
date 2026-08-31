import React from "react";
import { useState } from "react";

function Reverse () {
const [text, setText] = useState("");

    return (
        <div>
          <br></br>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <h2>Reversed: {text.split("").reverse().join("")}</h2>
        </div>
    );
};

export default Reverse;