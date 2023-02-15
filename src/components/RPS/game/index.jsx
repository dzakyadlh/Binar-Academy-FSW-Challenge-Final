import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../header";
import ScoreBox from "../scoreBox";

const Game = ({ score, myChoice, setScore }) => {
  const [com, setCom] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const [counter, setCounter] = useState(3);

  const newComPick = () => {
    const choices = ["rock", "paper", "scissors"];
    setCom(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    newComPick();
  }, []);

  const Result = () => {
    if (myChoice === "rock" && com === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "rock" && com === "paper") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "scissors" && com === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "scissors" && com === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "paper" && com === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "paper" && com === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, com]);

  return (
    <React.Fragment>
      <Header />
      <div className="container-games">
        <ScoreBox score={score} />
        <div className="gamesContent"></div>
        <div className="game">
          <div className="game__you">
            <span className="text">You Picked</span>
            <div
              className={`icon icon--${myChoice} ${
                playerWin === "win" ? `icon icon--${myChoice}--winner` : ""
              }`}
            ></div>
          </div>
          {playerWin === "win" && (
            <div className="game__play">
              <span className="text__win">You Win</span>
              <Link to="/RPS" className="play-again" onClick={() => setCom()}>
                Play Again
              </Link>
            </div>
          )}
          {playerWin === "lose" && (
            <div className="game__play">
              <span className="text__lose">You Lose</span>
              <Link to="/RPS" className="play-again" onClick={() => setCom()}>
                Play Again
              </Link>
            </div>
          )}
          {playerWin === "draw" && (
            <div className="game__play">
              <span className="text">Draw</span>
              <Link to="/RPS" className="play-again" onClick={() => setCom()}>
                Play Again
              </Link>
            </div>
          )}

          <div className="game__com">
            <span className="text">The Com Picked</span>
            {counter === 0 ? (
              <div
                className={`icon icon--${com} ${
                  playerWin === "lose" ? `icon icon--${com}--winner` : ""
                }`}
              ></div>
            ) : (
              <div className="counter">{counter}</div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Game;
