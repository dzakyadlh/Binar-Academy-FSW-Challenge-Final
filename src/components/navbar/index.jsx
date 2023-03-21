import "./navbar.css";
import imgLogo from "../../assets/LOGO1.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import React, { useState, useEffect } from "react";

function Navbar() {
  const auth = localStorage.getItem("token");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <header>
      <img
        src={imgLogo}
        onClick={() => (auth ? handleClick("/home") : handleClick("/"))}
      ></img>
      <nav>
        <Link to="/about">Our Story</Link>
        <Link to="/gamelist">Games</Link>
        <Link to="/support">Support</Link>
        {auth ? (
          <>
            <a href="/profile">Profile</a>
            <button className="nav-btn">
              <Link onClick={logout} to="/login">
                Logout
              </Link>
            </button>
          </>
        ) : (
          <>
            {" "}
            <Link to="/register">Sign Up</Link>
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
