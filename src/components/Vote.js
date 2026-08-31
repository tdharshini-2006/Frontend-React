import React from "react";
import { useState } from "react";

const Vote = () => {
     const [vote, setVote] = useState({
        React: 0,
        js: 0,
        Angular: 0
    });

    const addVote = (name) => {
        setVote({
            ...vote,
            [name]: vote[name] + 1
        });
    };

    return (
        <div>
            <h1>Vote for your favorite</h1>

            <button onClick={() => addVote("React")}>
                React ({vote.React})
            </button>

            <button onClick={() => addVote("js")}>
                js ({vote.js})
            </button>

            <button onClick={() => addVote("Angular")}>
                Angular ({vote.Angular})
            </button>
        </div>
    );
};

export default Vote;