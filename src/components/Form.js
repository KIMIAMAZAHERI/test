import { useState } from "react";

const Form = () => {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handelSubmit = (e) =>{
        e.preventDefault();
        console.log (firstName, lastName, email, message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
    };

    return (
        <form>
            <lable htmlFor="firstName">First Name </lable>
            <input 
            onChange={(e) => setFirstName (e.target.value)} 
            type="text"
            name="firstName"
            id="firstName" 
            value={firstName} 
            />
            <br/>
            <lable htmlFor="lastName">Last Name </lable>
            <input 
            onChange={(e) => setLastName (e.target.value)}
            type="lastName" 
            name="lastName" 
            id="lastName" 
            value={lastName}
             />
             <br/>
            <lable htmlFor="emai">Email </lable>
            <input 
            onChange={(e) => setEmail (e.target.value)}
            type="email" 
            name="email" 
            id="email" 
            value={email} 
            />
            <br/>
            <lable htmlFor="message">Message </lable>
            <input 
            onChange={(e) => setMessage (e.target.value)}
            type="text" 
            name="message" 
            id="message" 
            value={message}
             />
             <br/>
             <button type="submit" onClick={handelSubmit}>
                Submit
            </button>

        </form>
    );
};

export default Form; 