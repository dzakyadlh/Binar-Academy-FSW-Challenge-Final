import "./navbar.css";
import imgLogo from "../../assets/LOGO1.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isLandingPage, setIsLandingPage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/landingPage") {
      setIsLandingPage(true);
    } else {
      setIsLandingPage(false);
    }
  }, []);

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <header>
      <img src={imgLogo} onClick={() => handleClick("/")}></img>
      <nav>
        <a href="#">Our Story</a>
        <Link to="/gamelist">Games</Link>
        <a href="#">Support</a>
        <Link to="/login">Login</Link>
        <button className="nav-btn">
          {/* <Link to="/register">{isLandingPage ? "Register" : "LogOut"}</Link> */}
          <Link to="/register">Register</Link>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
