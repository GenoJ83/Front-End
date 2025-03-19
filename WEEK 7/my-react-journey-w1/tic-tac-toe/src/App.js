import { useState } from "react";
import "./App.css";
import Fireworks from "./Fireworks"; // Correct import path

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
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [showFireworks, setShowFireworks] = useState(false); // State for fireworks

  // Handle click on a square
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);

    // Check for a winner after each move
    const winner = calculateWinner(newSquares);
    if (winner) {
      setShowFireworks(true); // Show fireworks when there's a winner
      setTimeout(() => setShowFireworks(false), 1500); // Hide fireworks after 1.5 seconds
    }
  }

  // Determine the winner
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  // Restart the game
  function restartGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setShowFireworks(false); // Hide fireworks on restart
  }

  const winner = calculateWinner(squares);
  const draw = squares.every((square) => square !== null) && !winner;

  // Display status
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (draw) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
  }

  return (
    <div className="App">
      {showFireworks && <Fireworks />} {/* Show fireworks when there's a winner */}
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