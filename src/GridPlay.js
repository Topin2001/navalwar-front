import React, { useState } from "react";

const GridPlay = () => {
  const [shipGrid, setShipGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, "Destroyer", "Destroyer", "Destroyer", 0, 0, 0, 0, 0],
    ["Submarine", 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["Submarine", 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, "Carrier", "Carrier", "Carrier", "Carrier", "Carrier", 0, 0, 0],
    [0, 0, "Carrier", "Carrier", "Carrier", "Carrier", "Carrier", 0, 0, "Cruiser"],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, "Cruiser"],
    [0, "Battleship", "Battleship", "Battleship", "Battleship", "Battleship", 0, 0, 0, "Cruiser"],
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
  };

  return (
    <div>
      <h1>Tes bateaux</h1>
      <div className="shipgrid">
        {shipGrid.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((col, colIndex) => (
              <div
                className={`col ${col !== 0 ? "hit" : ""}`}
                key={colIndex}
              >
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
