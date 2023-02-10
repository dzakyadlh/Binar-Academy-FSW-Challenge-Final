import React from "react";
import "./footer.css";
import imgLogo from "../../assets/LOGO_FOOTER.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-img">
          <img src={imgLogo} alt="logo"></img>
        </div>
        <div className="footer-text">
          <p>play games @ Lame games © 2023 - lame games PA</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
