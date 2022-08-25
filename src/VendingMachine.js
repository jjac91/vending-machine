import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const VendingMachine = () =>{
    return(
        <div>
            I am the Vending God. Here are my Snacks:
            <p><Link to ="/chips">Chips</Link></p>
            <p><Link to ="/soda">Sodas</Link></p>
            <p><Link to ="/jerky">Jerky</Link></p>
        </div>
    )
}

export default VendingMachine