import * as React from "react";
import "./about.css";
import AboutUs from "../../assets/about_us_1.png";

const About = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="about-container">
          <div className="container-35">
            <h1>About Us</h1>
            <p>
              This website is an online games platform which you can play
              anywhere, anytime. With more than 30+ online games, and a
              leaderboard feature on every game to make it more competitive.
            </p>
            <p>
              This is a project made by 5 incredible engineers to fulfill the
              requirements for Full Stack Web Development Bootcamp by Binar
              Academy (wave 27).
            </p>
            <p>Meet the team!</p>
            <ul>
              <li>Agastya Tristyan Dhaniswara</li>
              <li>Dzaky Adla Hikmatiyar</li>
              <li>Fajar Akvianto Pratama</li>
              <li>Muhammad Haiqal</li>
              <li>Salma Khoerunisa</li>
            </ul>
            <button className="contactus">Contact Us</button>
          </div>
          <div className="container-40">
            <img className="aboutus" src={AboutUs} alt="about us" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
