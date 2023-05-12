import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleSquare = (direction) => {
    setPosition((prevPosition) => {
      let nextX = prevPosition.x;
      let nextY = prevPosition.y;

      switch (direction) {
        case "left":
          nextX -= 50;
          break;
        case "right":
          nextX += 50;
          break;
        case "up":
          nextY -= 50;
          break;
        case "down":
          nextY += 50;
          break;
        default:
          break;
      }

      if (nextX >= 10 && nextX <= 500 && nextY >= 0 && nextY <= 300) {
        return { x: nextX, y: nextY };
      }
      return prevPosition;
    });
  };

  return (
    <div>
      <div className="outer-square">
        <div className="inner-square-container">
          <div
            className="inner-square"
            style={{ top: position.y, left: position.x }}
          ></div>
        </div>
        <button onClick={() => handleSquare("up")} className="button-up">
          Up
        </button>
        <button onClick={() => handleSquare("down")} className="button-down">
          Down
        </button>
        <button onClick={() => handleSquare("left")} className="button-left">
          Left
        </button>
        <button onClick={() => handleSquare("right")} className="button-right">
          Right
        </button>
      </div>
    </div>
  );
};

export default App;

