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
  return (
    <header>
      <img src={imgLogo}></img>
      <nav>
        <a href="/#">Our Story</a>
        <a href="/#">Games</a>
        <a href="/#">Support</a>
        <a href="/#">Profile</a>
        <button className="nav-btn">
          <Link to="/register">{isLandingPage ? "Register" : "LogOut"}</Link>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
