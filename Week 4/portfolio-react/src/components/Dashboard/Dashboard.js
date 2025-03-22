import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Results from './Results';
import Skills from './Skills';
import Contact from './Contact';
import Feedback from './Feedback';
import Footer from '../Layout/Footer';

function Dashboard({ currentUser, onLogout }) {
  return (
    <div className="dashboard">
      <Header onLogout={onLogout} />
      <main className="container">
        <section>
          <h2>Personal Details</h2>
          <ul>
            <li>Full Name: {currentUser.name}</li>
            <li>Student ID: B20233</li>
            <li>Course and Year: Year 2 Computer Science</li>
            <li>Hobbies and Interests: Gaming, Fitness, and Web Development</li>
          </ul>
        </section>

        <Profile />

        <Results currentUser={currentUser} />

        <Skills />

        <Contact />

        <Feedback />

        <button id="logoutBtn" onClick={onLogout}>Logout</button>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard; 