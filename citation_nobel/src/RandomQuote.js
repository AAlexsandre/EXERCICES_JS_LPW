import {useState} from "react";

import quotes from "./quotes";
import Quote from "./Quote";

const RandomQuote = () => {
    const [index,setIndex] = useState(0);
    function newQuote() {
        setIndex(Math.floor(Math.random() * (quotes.length))); 
    }
    return (
        <>
            <Quote author={quotes[index].author} quote={quotes[index].quote} />
            <button onClick={newQuote}>CHANGE</button>
        </>
    );
}

export default RandomQuote;