import * as React from "react";
import "./support.css";
import SupportIMG from "../../assets/Support.svg";

const About = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="about-container">
          <div className="container-35">
            <h1>Having any Troubles?</h1>
            <p>If you have any problems, feel free to contact us !</p>
            <p>lamegames@support.com</p>
            <p>021-999-889</p>
            <p>Hope that helps!</p>
          </div>
          <div className="container-40">
            <img className="aboutus" src={SupportIMG} alt="about us" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
