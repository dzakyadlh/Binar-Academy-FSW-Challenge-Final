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
import Support from "./pages/SupportPage";
import NotFound from "./pages/404";
import PrivateRoute from "./components/privateRoute";
import Profile from "./pages/Profile";

import "./App.css";

import { useNavigate } from "react-router";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const pathname = window.location.pathname;

  useEffect(() => {
    if (token && pathname === "/login") navigate("/home");
    if (token && pathname === "/") navigate("/home");
  }, [pathname]);

  return (
    <React.Fragment>
      <div className="container">
        {window.location.pathname !== "/login" &&
          window.location.pathname !== "/404" && <Navbar />}
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="gamelist" element={<GameList />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="gamedetails/:id" element={<GameDetails />} />
          <Route
            path="/rps"
            element={
              <PrivateRoute>
                <Play setMyChoice={setMyChoice} score={score} />
              </PrivateRoute>
            }
          />
          <Route
            path="/rps/game"
            element={
              <PrivateRoute>
                <Game myChoice={myChoice} score={score} setScore={setScore} />
              </PrivateRoute>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="support" element={<Support />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        {window.location.pathname !== "/login" &&
          window.location.pathname !== "/404" && <Footer />}
      </div>
    </React.Fragment>
  );
};

export default App;
