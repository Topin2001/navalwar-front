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

  const handleClick = (row, col) => {
    console.log(row, col);
    let newGrid = [...grid];
    if (grid[row][col] === 0) {
        newGrid[row][col] = 1;
    }else{
        newGrid[row][col] = 0;
    }
    setGrid(newGrid);
  };

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((col, colIndex) => (
            <div
              className={`col ${col === 1 ? "hit" : ""}`}
              key={colIndex}
              onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
