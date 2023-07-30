import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={<Header isLoggedIn={isLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
