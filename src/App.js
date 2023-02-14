import React, { useEffect } from "react";
import GameList from "./pages/GameList";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";
import GameDetails from "./pages/GameDetails";

import "./App.css";

import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "react-bootstrap";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="gamelist" element={<GameList />} />
        <Route path="gamedetails" element={<GameDetails />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
