import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import PersonalDetails from "./components/PersonalDetails";
import ProfilePicture from "./components/ProfilePicture";
import HobbyVideo from "./components/HobbyVideo";
import Results from "./components/Results";
import Skills from "./components/Skills";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import CareerGoals from "./components/CareerGoals";
import Footer from "./components/Footer";
import "./styles/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (success) => {
    setIsAuthenticated(success);
  };

  const PortfolioContent = () => (
    <>
      <PersonalDetails />
      <ProfilePicture />
      <HobbyVideo />
      <Results />
      <Skills />
      <Feedback />
      <CareerGoals />
      <Contact />
      <Footer />
    </>
  );

  return (
    <Router>
      <div className="app">
        {isAuthenticated ? (
          <>
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<PortfolioContent />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;
