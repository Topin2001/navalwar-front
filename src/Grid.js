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

  const handleSelectShip = (ship) => {
    setSelectedShip(ship)
    console.log(ship, selectedShip);
  };

  const handlePlaceShip = (row, col) => {
    console.log(selectedShip);
    if (!selectedShip) {
      alert('Please select a ship to place');
      return;
    }

    let newGrid = [...grid];
    newGrid[row][col] = 1;
    setGrid(newGrid);
    setSelectedShip(null);
  };


  return (
    <div>
      <h2>Placement des bateaux</h2>
      <button onClick={() => handleSelectShip('Destroyer')}>Destroyer</button>
      <button onClick={() => handleSelectShip('Cruiser')}>Cruiser</button>
      <button onClick={() => handleSelectShip('Submarine')}>Submarine</button>
      <button onClick={() => handleSelectShip('Battleship')}>Battleship</button>
      <button onClick={() => handleSelectShip('Carrier')}>Carrier</button>
      <p>Selected Ship: {selectedShip}</p>
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((col, colIndex) => (
            <div
              className={`col ${col === 1 ? "hit" : ""}`}
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
