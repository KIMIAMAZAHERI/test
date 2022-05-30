import {Link} from "react-router-dom";
const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link className="Links" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="Links" to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="Links" to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;