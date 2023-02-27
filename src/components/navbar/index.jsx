import "./navbar.css";
import imgLogo from "../../assets/LOGO1.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import React, { useState, useEffect } from "react";

function Navbar() {
  const auth = localStorage.getItem("token");
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <header>
      <img src={imgLogo} onClick={() => handleClick("/")}></img>
      <nav>
        <Link to="/about">Our Story</Link>
        <Link to="/gamelist">Games</Link>
        <a href="#">Support</a>
        {auth ? (
          <button className="nav-btn">
            <Link onClick={logout} to="/login">
              Logout
            </Link>
          </button>
        ) : (
          <>
            {" "}
            <button className="nav-btn">
              <Link to="/register">Register</Link>
            </button>
            <button className="nav-btn">
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
