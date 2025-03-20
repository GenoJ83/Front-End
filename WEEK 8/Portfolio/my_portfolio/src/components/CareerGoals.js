// CareerGoals.js
import React from "react";

const CareerGoals = () => {
  const goals = [
    {
      title: "Short-term Goals",
      items: [
        "Complete my Computer Science degree with distinction",
        "Master React and Node.js development",
        "Build a portfolio of full-stack projects",
        "Gain internship experience in web development"
      ]
    },
    {
      title: "Long-term Goals",
      items: [
        "Become a Full Stack Developer",
        "Work for a leading tech company",
        "Contribute to open-source projects",
        "Start a tech consulting business"
      ]
    }
  ];

  return (
    <div className="card">
      <h2>Career Goals</h2>
      <div className="goals-container">
        {goals.map((goal, index) => (
          <div key={index} className="goal-section">
            <h3>{goal.title}</h3>
            <ul className="goals-list">
              {goal.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <i className="fas fa-check-circle"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerGoals;