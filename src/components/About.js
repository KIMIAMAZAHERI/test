import Tehran from "./images/Tehran.jpg";
import Paris from "./images/Paris.jpg";


const About = () => {
    return (
        <div>
            <img src={Tehran} alt="picture of Tehran " height={400} width={600}></img>
        <p>"KIM" With over many years of experience in aviation and tourism services around the world, especially in the Middle East, it offers its services to customers.</p>
        <img src={Paris} alt="picture of Paris"h height={400} width={600}></img>
        <p>Commitment to the customer, providing quality and appropriate services, hospitality and gaining the customer's deep trust are our main goals. The way we look at the customer is different from other companies. We try to provide quality and appropriate service to the customer.</p>
        </div>
    );
};

export default About;