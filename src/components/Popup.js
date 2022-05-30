import react from "react";
import './Popup.css';


const Popup = (props) => {
    return (props.trigger) ? (
        <div className="pupup">
            <div className= "popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            </div>
        </div>
    ): "";
};

export default Popup; 