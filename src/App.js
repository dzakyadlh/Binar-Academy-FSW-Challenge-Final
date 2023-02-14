import React, { useEffect } from "react";
import GameList from "./pages/GameList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";

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
        <Route path="landingPage" element={<LandingPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
