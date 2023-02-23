import React, { useEffect, useState } from "react";
import GameList from "./pages/GameList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import GameDetails from "./pages/GameDetails";
import Game from "./components/RPS/game";
import Play from "./components/RPS/play";
import About from "./pages/About";

import "./App.css";

import { useNavigate } from "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "react-bootstrap";

const App = () => {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <React.Fragment>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="gamelist" element={<GameList />} />
          <Route path="landingPage" element={<LandingPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="gamedetails" element={<GameDetails />} />
          <Route
            path="/rps"
            element={<Play setMyChoice={setMyChoice} score={score} />}
          />
          <Route
            path="/rps/game"
            element={
              <Game myChoice={myChoice} score={score} setScore={setScore} />
            }
          />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
