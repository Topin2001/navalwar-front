import React, { useState } from "react";

const GridPlay = ({grid_size}) => {
  const [shipGrid, setShipGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, "Destroyer", "Destroyer", "Destroyer", 0, 0, 0, 0, 0],
    ["Submarine", 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["Submarine", 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, "Carrier", "Carrier", "Carrier", "Carrier", "Carrier", 0, 0, 0],
    [
      0,
      0,
      "Carrier",
      "Carrier",
      "Carrier",
      "Carrier",
      "Carrier",
      0,
      0,
      "Cruiser",
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, "Cruiser"],
    [
      0,
      "Battleship",
      "Battleship",
      "Battleship",
      "Battleship",
      "Battleship",
      0,
      0,
      0,
      "Cruiser",
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [shotGrid, setShotGrid] = useState([
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

  const handleShot = (rowIndex, colIndex) => {
    let newShotGrid = [...shotGrid];
    if (shipGrid[rowIndex][colIndex] !== 0) {
      newShotGrid[rowIndex][colIndex] = "Hit";
    } else {
      newShotGrid[rowIndex][colIndex] = "Miss";
    }
    setShotGrid(newShotGrid);
    handleShotTaken(rowIndex, colIndex);
  };

  const handleShotTaken = (rowIndex, colIndex) => {
    let newShipGrid = [...shipGrid];
    if (shipGrid[rowIndex][colIndex] !== 0) {
      checkShip(shipGrid[rowIndex][colIndex]);
      newShipGrid[rowIndex][colIndex] = "Hit" + shipGrid[rowIndex][colIndex];
    } else {
      newShipGrid[rowIndex][colIndex] = "Shot";
    }
    setShipGrid(newShipGrid);
  };

  const checkShip = (ship) => {
    let compteur = 0;
    for (let i = 0; i < grid_size; i++) {
      for (let j = 0; j < grid_size; j++) {
        if (shipGrid[i][j] === ship) {
          compteur++;
        }
      }
    }
    if (compteur === 1) {
      console.log("Plus de " + ship)
    }
  };



  return (
    <div>
      <h1>Tes bateaux</h1>
      <div className="shipgrid">
        {shipGrid.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((col, colIndex) => (
              <div className={`col ${col !== 0 ? "hit" : ""}`} key={colIndex}>
                {shipGrid[rowIndex][colIndex]}
              </div>
            ))}
          </div>
        ))}
      </div>
      <h1>Tes tirs</h1>
      <div className="shotgrid">
        {shotGrid.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((col, colIndex) => (
              <div
                className={`col ${col !== 0 ? "hit" : ""}`}
                key={colIndex}
                onClick={() => handleShot(rowIndex, colIndex)}
              >
                {shotGrid[rowIndex][colIndex]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridPlay;
