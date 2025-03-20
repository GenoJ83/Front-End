import { useState } from "react";
import "./styles/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import PersonalDetails from "./components/PersonalDetails";
import ProfilePicture from "./components/ProfilePicture";
import HobbyVideo from "./components/HobbyVideo";
import Results from "./components/Results";
import Skills from "./components/Skills";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import CareerGoals from "./components/CareerGoals";
import Footer from "./components/Footer";

const Portfolio = () => {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className={lightMode ? "light-mode" : ""}>
      <Header lightMode={lightMode} setLightMode={setLightMode} />
      <main>
        <div className="container">
          <PersonalDetails />
          <ProfilePicture />
          <HobbyVideo />
          <Results />
          <Skills />
          <Feedback />
          <Contact />
          <CareerGoals />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
