import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import Dashboard from './components/Dashboard/Dashboard';
import './styles/styles.css';

// Duplicate import removed
import { BrowserRouter, Routes, Route, Navigate } from 'react';

/*
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleSignup = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };
*/
  return (
   /* <Router>
     <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={
              currentUser ? 
                <Navigate to="/dashboard" /> : 
                <Login onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/signup" 
            element={
              currentUser ? 
                <Navigate to="/dashboard" /> : 
                <Signup onSignup={handleSignup} />
            } 
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route 
            path="/dashboard" 
            element={
              currentUser ? 
                <Dashboard currentUser={currentUser} onLogout={handleLogout} /> : 
                <Navigate to="/login" />
            } 
          />
          <Route 
            path="/" 
            element={
              currentUser ? 
                <Navigate to="/dashboard" /> : 
                <Navigate to="/login" />
            } 
          />
        </Routes>
      </div>
    </Router> */
  );


export default App;
