import React, { useState } from 'react';
import './App.css';
import GreetingPopup from './GreetingsPopUp';

const calculateWinner = (squares) => {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.every((square) => square) // Check if all squares are filled
    ? 'Tie'
    : `Player Turn: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (i) => {
    if (squares[i] || winner) {
      // Do nothing if the square is already filled or there's a winner
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="App">
      <div>
      <GreetingPopup /></div>
      <div className="status"><b>{status}</b></div>
      <div className="board">
        {squares.map((value, index) => (
          <div
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default App;
