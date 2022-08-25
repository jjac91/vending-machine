import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Soda = () =>{
    return(
        <div>
            I am the Sodalord, please take a beverage.
            <p><Link to="/">Now go back</Link></p>
        </div>
    )
}
export default Soda