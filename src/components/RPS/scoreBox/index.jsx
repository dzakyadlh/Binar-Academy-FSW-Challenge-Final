import React from "react";
import "./style.css";

const scoreBox = ({ score }) => {
  return (
    <div className="score-box">
      <span>Score</span>
      <div className="score-box__score">{score}</div>
    </div>
  );
};

export default scoreBox;
