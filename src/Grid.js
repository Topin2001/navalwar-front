import './Grid.css';
import React, { useState } from "react";

const Grid = () => {
  const [grid, setGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [selectedShip, setSelectedShip] = useState(null);

  const ship = ['Destroyer', 'Cruiser', 'Submarine', 'Battleship', 'Carrier'];

  const handleSelectShip = (ship) => {
    const msg_error = document.getElementById("error_msg")
    msg_error.innerHTML = ""
    console.log(grid);
    setSelectedShip(ship);
  };

  const handlePlaceShip = (row, col, ship) => {
    const newGrid = [...grid];

    if (grid[row][col] !== 0) {
      newGrid[row][col] = 0;
    } else {
      if (!selectedShip) {
        const msg_error = document.getElementById("error_msg")
        msg_error.innerHTML = "Merci de choisir un bateau à placer !"
        return;
      }
      switch(ship) {
        case 'Destroyer':
          // Bateau de 3*1
          if (newGrid[row][col] === 0 && newGrid[row][col+1] === 0 && newGrid[row][col+2] === 0) {
            newGrid[row][col] = ship;
            newGrid[row][col+1] = ship;
            newGrid[row][col+2] = ship;
          }
          break;
        case 'Cruiser':
          // Bateau de 3*1
          if (newGrid[row][col] === 0 && newGrid[row][col+1] === 0 && newGrid[row][col+2] === 0){
            newGrid[row][col] = ship;
            newGrid[row][col+1] = ship;
            newGrid[row][col+2] = ship;
          }
          break;
        case 'Submarine':
          // Bateau de 2*1
          if (newGrid[row][col] === 0 && newGrid[row][col+1] === 0){
            newGrid[row][col] = ship;
            newGrid[row][col+1] = ship;
          }
          break;
        case 'Battleship':
          //Bateau de 4*1
          if (newGrid[row][col] === 0 && newGrid[row][col+1] === 0 && newGrid[row][col+2] === 0 && newGrid[row][col+3] === 0) {
            newGrid[row][col] = ship;
            newGrid[row][col+1] = ship;
            newGrid[row][col+2] = ship;
            newGrid[row][col+3] = ship;
          }
          break;
        case 'Carrier':
          //Bateau de 4*2
          if (newGrid[row][col] === 0 && newGrid[row][col+1] === 0 && newGrid[row][col+2] === 0 && newGrid[row][col+3] === 0 && newGrid[row+1][col] === 0 && newGrid[row+1][col+1] === 0 && newGrid[row+1][col+2] === 0 && newGrid[row+1][col+3] === 0) {
            newGrid[row][col] = ship;
            newGrid[row][col+1] = ship;
            newGrid[row][col+2] = ship;
            newGrid[row][col+3] = ship;
            newGrid[row+1][col] = ship;
            newGrid[row+1][col+1] = ship;
            newGrid[row+1][col+2] = ship;
            newGrid[row+1][col+3] = ship;
          }
          break;
        default:
          // code block
      }
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
                onClick={() => handlePlaceShip(rowIndex, colIndex, selectedShip)}
              >{grid[rowIndex][colIndex]}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

};


export default Grid;
