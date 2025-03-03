import React, { useState } from 'react';

const GreetingPopup = () => {
  // State to track visibility of the popup
  const [isVisible, setIsVisible] = useState(true);

  // Handle closing the popup
  const handleClose = () => {
    setIsVisible(false);
  };

  // If the popup is visible, render it, otherwise return null
  return (
    <>
      {isVisible && (
        <div className="popup-container">
          {' '}
          {/* Popup container */}
          <div className="popup">
            {' '}
            {/* Greeting text */}
            <button onClick={handleClose} className="close-button">
              &times; {/* "X" for close */}
            </button>
            <br />
            <h1 style={{color:'black'}}>WELCOME!</h1>
            <br />
            {/* Popup box */}
            <span className="greeting-text">
              Welcome to the React Tic Tac Toe App! This is a two-player game
              where players take turns clicking on the squares of the board to
              place their corresponding "X" or "O". The objective is to be the
              first to get three of your marks in a row—whether horizontally,
              vertically, or diagonally. If all squares are filled without a
              winner, the game results in a tie. As you play, the game
              dynamically updates to show each player's moves, and the winner
              (or tie) is determined automatically. Once a game ends, you can
              start a new round by resetting the board. Enjoy playing and
              challenging your opponent in this classic game!
            </span>{' '}
            <br /><br />
            <span className="greeting-text">
              When ready click the ""X" in the upper right corner to begin 
              playing the Tic-Tac-Toe game.
            </span>{' '}
            <br />
            <br />
          </div>
        </div>
      )}
    </>
  );
};

export default GreetingPopup;
