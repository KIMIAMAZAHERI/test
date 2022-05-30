import Form from "./Form";
import Pupup from "./Popup";
import { useState } from "react";

const Contact = () => {
    const [buttonPopup, setButtonPopup] = useState (false);
    return (
        <div>
        <h1>Contact Us</h1>
        <Form/>
        <br></br>
        <button onClick={() => setButtonPopup (true)}>Booking your trip </button>
        <Pupup trigger= {buttonPopup} setTrigger= {setButtonPopup}>
            <p>If you want to book your trip please contact us </p>
        </Pupup>
        </div>
    );
};

export default Contact;