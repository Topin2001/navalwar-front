import "./Grid.css";
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

  const grid_size = 10;

  const [selectedShip, setSelectedShip] = useState({
    ship: null,
    rotation: 'horizontal',
  });

  const [ship] = useState(['Destroyer', 'Cruiser', 'Submarine', 'Battleship', 'Carrier']);

  const shipSizes = {
    Destroyer: 3,
    Cruiser: 3,
    Submarine: 2,
    Battleship: 4,
    Carrier: 4,
  };

  const shipWidth = {
    Destroyer: 1,
    Cruiser: 1,
    Submarine: 1,
    Battleship: 1,
    Carrier: 2,
  };

  const handleSelectShip = (ship) => {
    const msg_error = document.getElementById("error_msg");
    msg_error.innerHTML = "";
    setSelectedShip((prevState) => ({
      ship: ship,
      rotation: prevState.rotation,
    }));
  };

  const handleRotateShip = () => {
    setSelectedShip((prevState) => ({
      ...prevState,
      rotation: prevState.rotation === "horizontal" ? "vertical" : "horizontal",
    }));
  };

  const handlePlaceShip = (row, col) => {
    const newGrid = [...grid];

    if (grid[row][col] !== 0) {
      const deletingShip = grid[row][col];
      for (let i = 0; i < grid_size; i++) {
        for (let y = 0; y < grid_size; y++) {
          if (grid[i][y] === deletingShip) {
            grid[i][y] = 0;
          }
        }
      }
      ship.push(deletingShip);
    } else {
      if (selectedShip.ship == null) {
        const msg_error = document.getElementById("error_msg");
        msg_error.innerHTML = "Merci de choisir un bateau à placer !";
        return;
      }
      if (selectedShip.rotation === "horizontal") {
        let canPlace = true;
        for (let i = 0; i < shipSizes[selectedShip.ship]; i++) {
          for (let y = 0; y < shipWidth[selectedShip.ship]; y++) {
            if (
              col + i >= grid_size ||
              row + y >= grid_size ||
              newGrid[row + y][col + i] !== 0
            ) {
              canPlace = false;
              break;
            }
          }
        }

        if (canPlace) {
          for (let i = 0; i < shipSizes[selectedShip.ship]; i++) {
            for (let y = 0; y < shipWidth[selectedShip.ship]; y++) {
              newGrid[row + y][col + i] = selectedShip.ship;
            }
          }
          ship.splice(ship.indexOf(selectedShip.ship), 1);
          setSelectedShip((prevState) => ({
            ship: null,
            rotation: prevState.rotation,
          }));
        }
      } else {
        let canPlace = true;
        for (let i = 0; i < shipSizes[selectedShip.ship]; i++) {
          for (let y = 0; y < shipWidth[selectedShip.ship]; y++) {
            if (
              row + i >= grid_size ||
              col + y >= grid_size ||
              newGrid[row + i][col + y] !== 0
            ) {
              canPlace = false;
              break;
            }
          }
        }

        if (canPlace) {
          for (let i = 0; i < shipSizes[selectedShip.ship]; i++) {
            for (let y = 0; y < shipWidth[selectedShip.ship]; y++) {
              newGrid[row + i][col + y] = selectedShip.ship;
            }
          }
          ship.splice(ship.indexOf(selectedShip.ship), 1);
          setSelectedShip((prevState) => ({
            ship: null,
            rotation: prevState.rotation,
          }));
        }
      }
    }
    setGrid(newGrid);
  };

  return (
    <div>
      <h2>Placement des bateaux</h2>
      {ship.map((navire) => (
        <button key={navire} onClick={() => handleSelectShip(navire)}>
          {navire}
        </button>
      ))}
      <p>Selected Ship: {selectedShip.ship}</p>
      <button onClick={handleRotateShip}>Rotate Ship</button>
      <p>Rotation sens: {selectedShip.rotation}</p>
      <p id="error_msg"></p>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((col, colIndex) => (
              <div
                className={`col ${col !== 0 ? "hit" : ""}`}
                key={colIndex}
                onClick={() => handlePlaceShip(rowIndex, colIndex)}
              >
                {grid[rowIndex][colIndex]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
