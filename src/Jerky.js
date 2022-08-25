import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Jerky = () =>{
    return(
        <div>
            I am the Jerky Overlord. You are too poor for good jerky
            <p><Link to="/">Now go back</Link></p>
        </div>
    )
}
export default Jerky