import React, { useEffect } from "react";
import GameList from "./pages/GameList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";
import GameDetails from "./pages/GameDetails";

import "./App.css";

import { useNavigate } from "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "react-bootstrap";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Navbar />
      <Routes>
        <Route path="gamelist" element={<GameList />} />
<<<<<<< HEAD
        <Route path="landingPage" element={<LandingPage />} />
        <Route path="/" element={<HomePage />} />
=======
        <Route path="gamedetails" element={<GameDetails />} />
>>>>>>> 93a3a64c99a1d277e3fc0ccb64418027bf44613d
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
