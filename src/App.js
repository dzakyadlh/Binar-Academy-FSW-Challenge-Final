import React, { useEffect } from 'react';
import GameList from './pages/GameList';
import Navbar from './components/navbar/navbar';

import './App.css';

import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from 'react-bootstrap';

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path='gamelist' element={<GameList/>}/>
      </Routes>
    </React.Fragment>
  );
};

export default App;
