import './Grid.css';
import React, { useState } from "react";

const Grid = () => {
  const [grid, setGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [selectedShip, setSelectedShip] = useState(null);

  const ship = ['Destroyer', 'Cruiser', 'Submarine', 'Battleship', 'Carrier'];

  const handleSelectShip = (ship) => {
    const msg_error = document.getElementById("error_msg")
    msg_error.innerHTML = ""
    setSelectedShip(ship);
  };

  const handlePlaceShip = (row, col) => {
    const newGrid = [...grid];

    if (grid[row][col] !== 0) {
      newGrid[row][col] = 0;
    } else {
      if (!selectedShip) {
        const msg_error = document.getElementById("error_msg")
        msg_error.innerHTML = "Merci de choisir un bateau à placer !"
        return;
      }
      newGrid[row][col] = 1;
      setSelectedShip(null);
    }
    setGrid(newGrid);
  };

  return (
    <div>
      <h2>Placement des bateaux</h2>
      {ship.map(navire => (
        <button key={navire} onClick={() => handleSelectShip(navire)}>{navire}</button>
      ))}
      <p>Selected Ship: {selectedShip}</p>
      <p id="error_msg"></p>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((col, colIndex) => (
              <div
                className={`col ${col !== 0 ? "hit" : ""}`}
                key={colIndex}
                onClick={() => handlePlaceShip(rowIndex, colIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

};


export default Grid;
