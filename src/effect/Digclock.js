import React from "react";
import { useState, useEffect } from "react";

function Digclock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return (
        <div>
          <h1>Date: {time.toLocaleDateString()}</h1>
          <h1>Time: {time.toLocaleTimeString()}</h1>
           
        </div>
    );
}

export default Digclock;