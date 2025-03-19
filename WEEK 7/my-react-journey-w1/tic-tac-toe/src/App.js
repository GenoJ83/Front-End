import { useState } from "react";
import "./App.css";

// Square Component
function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}

// App Component
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // Track the state of all squares
  const [isXNext, setIsXNext] = useState(true); // Track whose turn it is

  // Handle click on a square
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return; // If the square is already filled or there's a winner, do nothing
    }
    const newSquares = squares.slice(); // Create a copy of the squares array
    newSquares[i] = isXNext ? "X" : "O"; // Set the value of the clicked square
    setSquares(newSquares); // Update the state
    setIsXNext(!isXNext); // Toggle the turn
  }

  // Determine the winner
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal
      [2, 4, 6], // Diagonal
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return the winner ("X" or "O")
      }
    }
    return null; // No winner yet
  }

  // Restart the game
  function restartGame() {
    setSquares(Array(9).fill(null)); // Reset the squares to null
    setIsXNext(true); // Reset the turn to "X"
  }

  const winner = calculateWinner(squares); // Check if there's a winner
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? "X" : "O"}`; // Display status

  return (
    <div className="App">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button onClick={restartGame} className="restart-button">
        Restart Game
      </button>
    </div>
  );
}

export default App;