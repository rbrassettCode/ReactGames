import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Register from './components/Register';
import TicTacToe from './components/TicTacToe';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <Router>
      <div>
        <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<Login onLogin={handleLogin}/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/games/tictactoe' element={<TicTacToe/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
