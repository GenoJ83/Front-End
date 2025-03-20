import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CareerGoals from './components/CareerGoals';
import Contact from './components/Contact';
import "./styles/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PersonalDetails from "./components/PersonalDetails";
import ProfilePicture from "./components/ProfilePicture";
import HobbyVideo from "./components/HobbyVideo";
import Results from "./components/Results";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [results, setResults] = useState([]);

  const handleLogin = (success) => {
    setIsAuthenticated(success);
  };

  const addResult = (result) => {
    setResults([...results, result]);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <About />
                <Skills />
                <Projects />
                <Results />
                <CareerGoals />
                <Contact />
              </>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
