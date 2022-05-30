import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import About from "./About"


const ButtonLink = ({children}) =>{
    return (   
        <Link>
        <Button>About</Button>
        {children}
        </Link> 
       
     
    );
};
export default ButtonLink;