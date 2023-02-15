import React from "react";
import { Link } from "react-router-dom";
import Triangle from "../../../assets/bg-triangle.svg";
import "./style.css";
import Header from "../header";
import ScoreBox from "../scoreBox";

const Play = ({ score, setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container-games">
        <ScoreBox score={score} />
        <div className="gamesContent">
          <div className="play">
            <img src={Triangle} alt="" className="triangle" />
            <div className="items">
              <Link to="game">
                <div
                  data-id="paper"
                  onClick={setChoice}
                  className="icon icon--paper"
                ></div>
              </Link>
              <Link to="game">
                <div
                  data-id="scissors"
                  onClick={setChoice}
                  className="icon icon--scissors"
                ></div>
              </Link>
              <Link to="game">
                <div
                  data-id="rock"
                  onClick={setChoice}
                  className="icon icon--rock"
                ></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Play;
