import { useState } from "react";
import "./App.css";

// Component
function Square() {
  const [value, setValue] = useState(null); // Track the state of the square

  function handleButtonClick() {
    setValue("X"); // Set value to "X" when clicked
    console.log("Button clicked", value);
  }

  return (
    <button onClick={handleButtonClick} className="square">
      {value} {/* Show updated value */}
    </button>
  );
}

function App() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default App;
