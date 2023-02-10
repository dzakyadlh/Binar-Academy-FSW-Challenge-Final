import "./navbar.css"
import imgLogo from "../../assets/LOGO.png"

function Navbar() {
    return (
        <header>
            <img src={imgLogo}></img>
            <nav>
                <a href="/#">Our Story</a>
                <a href="/#">Games</a>
                <a href="/#">Support</a>
                <a href="/#">Login</a>
                <button className="nav-btn">
                    <a>Register</a>
                </button>
            </nav>
        </header>
    );
};

export default Navbar;