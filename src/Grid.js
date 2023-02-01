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

  const grid_size = 10;

  const [selectedShip, setSelectedShip] = useState({
    ship: null,
    rotation: "horizontal"
  });

  const ship = ['Destroyer', 'Cruiser', 'Submarine', 'Battleship', 'Carrier'];

  const handleSelectShip = (ship) => {
    const msg_error = document.getElementById("error_msg")
    msg_error.innerHTML = ""
    setSelectedShip(prevState => ({
      ship: ship,
      rotation: prevState.rotation
    }))
  };

  const handleRotateShip = () => {
    setSelectedShip(prevState => ({
      ...prevState,
      rotation: prevState.rotation === "horizontal" ? "vertical" : "horizontal"
    }));
  };

  const handlePlaceShip = (row, col) => {
    const newGrid = [...grid];

    if (grid[row][col] !== 0) {
      newGrid[row][col] = 0;
    } else {
      if (selectedShip.ship == null) {
        const msg_error = document.getElementById("error_msg")
        msg_error.innerHTML = "Merci de choisir un bateau à placer !"
        return;
      }
      if (selectedShip.rotation === "horizontal") {
        switch(selectedShip.ship) {
          case 'Destroyer':
            // Bateau de 3*1
            if (row+1 <= grid_size && col+3 <= grid_size) {
              if (grid[row][col] === 0 && grid[row][col+1] === 0 && grid[row][col+2] === 0) {
                newGrid[row][col] = selectedShip.ship;
                newGrid[row][col+1] = selectedShip.ship;
                newGrid[row][col+2] = selectedShip.ship;
                setSelectedShip(prevState => ({
                  ship: null,
                  rotation: prevState.rotation
                }));
              }
            }
            break;
          case 'Cruiser':
            // Bateau de 3*1
            if (row+1 <= grid_size && col+3 <= grid_size){
              if (grid[row][col] === 0 && grid[row][col+1] === 0 && grid[row][col+2] === 0){
                newGrid[row][col] = selectedShip.ship;
                newGrid[row][col+1] = selectedShip.ship;
                newGrid[row][col+2] = selectedShip.ship;
                setSelectedShip(prevState => ({
                  ship: null,
                  rotation: prevState.rotation
                }));
              }
            }
            break;
          case 'Submarine':
            // Bateau de 2*1
            if (row+1 <= grid_size && col+2 <= grid_size){
              if (grid[row][col] === 0 && grid[row][col+1] === 0){
                newGrid[row][col] = selectedShip.ship;
                newGrid[row][col+1] = selectedShip.ship;
                setSelectedShip(prevState => ({
                  ship: null,
                  rotation: prevState.rotation
                }));
              }
            }
            break;
          case 'Battleship':
            //Bateau de 4*1
            if (row+1 <= grid_size && col+4 <= grid_size) {
              if (grid[row][col] === 0 && grid[row][col+1] === 0 && grid[row][col+2] === 0 && grid[row][col+3] === 0){
                newGrid[row][col] = selectedShip.ship;
                newGrid[row][col+1] = selectedShip.ship;
                newGrid[row][col+2] = selectedShip.ship;
                newGrid[row][col+3] = selectedShip.ship;
                setSelectedShip(prevState => ({
                  ship: null,
                  rotation: prevState.rotation
                }));
              }
            }
            break;
          case 'Carrier':
            //Bateau de 4*2
            if (row+2 <= grid_size && col+4 <= grid_size) {
              if (grid[row][col] === 0 && grid[row][col+1] === 0 && grid[row][col+2] === 0 && grid[row][col+3] === 0 && grid[row+1][col] === 0 && grid[row+1][col+1] === 0 && grid[row+1][col+2] === 0 && grid[row+1][col+3] === 0){
                newGrid[row][col] = selectedShip.ship;
                newGrid[row][col+1] = selectedShip.ship;
                newGrid[row][col+2] = selectedShip.ship;
                newGrid[row][col+3] = selectedShip.ship;
                newGrid[row+1][col] = selectedShip.ship;
                newGrid[row+1][col+1] = selectedShip.ship;
                newGrid[row+1][col+2] = selectedShip.ship;
                newGrid[row+1][col+3] = selectedShip.ship;
                setSelectedShip(prevState => ({
                  ship: null,
                  rotation: prevState.rotation
                }));
              }
            }
            break;
          default:
            break;
        }
      } else {
        switch(selectedShip.ship) {
          case 'Destroyer':
            // Bateau de 3*1
            if (row+3 <= grid_size && col+1 <= grid_size) {
              if (grid[row][col] === 0 && grid[row+1][col] === 0 && grid[row+2][col] === 0){
                newGrid[row][col] = selectedShip.ship;
                newGrid[row+1][col] = selectedShip.ship;
                newGrid[row+2][col] = selectedShip.ship;
                setSelectedShip(prevState => ({
                  ship: null,
                  rotation: prevState.rotation
                }));
              }
            }
            break;
          case 'Cruiser':
            // Bateau de 3*1
            if (row+3 <= grid_size && col+1 <= grid_size) {
              if (grid[row][col] === 0 && grid[row+1][col] === 0 && grid[row+2][col] === 0){
                newGrid[row][col] = selectedShip.ship;
                newGrid[row+1][col] = selectedShip.ship;
                newGrid[row+2][col] = selectedShip.ship;
                setSelectedShip(prevState => ({
                  ship: null,
                  rotation: prevState.rotation
                }));
              }
            }
            break;
          case 'Submarine':
            // Bateau de 2*1
            if (row+2 <= grid_size && col+1 <= grid_size){
              if (grid[row][col] === 0 && grid[row+1][col] === 0){
                newGrid[row][col] = selectedShip.ship;
                newGrid[row+1][col] = selectedShip.ship;
                setSelectedShip(prevState => ({
                  ship: null,
                  rotation: prevState.rotation
                }));
              }
            }
            break;
          case 'Battleship':
            //Bateau de 4*1
            if (row+4 <= grid_size && col+1 <= grid_size) {
              if (grid[row][col] === 0 && grid[row+1][col] === 0 && grid[row+2][col] === 0 && grid[row+3][col] === 0){
                newGrid[row][col] = selectedShip.ship;
                newGrid[row+1][col] = selectedShip.ship;
                newGrid[row+2][col] = selectedShip.ship;
                newGrid[row+3][col] = selectedShip.ship;
                setSelectedShip(prevState => ({
                  ship: null,
                  rotation: prevState.rotation
                }));
              }
            }
            break;
          case 'Carrier':
            //Bateau de 4*2
            if (row+4 <= grid_size && col+2 <= grid_size) {
              if (grid[row][col] === 0 && grid[row+1][col] === 0 && grid[row+2][col] === 0 && grid[row+3][col] === 0 && grid[row][col+1] === 0 && grid[row+1][col+1] === 0 && grid[row+2][col+1] === 0 && grid[row+3][col+1] === 0){
                newGrid[row][col] = selectedShip.ship;
                newGrid[row+1][col] = selectedShip.ship;
                newGrid[row+2][col] = selectedShip.ship;
                newGrid[row+3][col] = selectedShip.ship;
                newGrid[row][col+1] = selectedShip.ship;
                newGrid[row+1][col+1] = selectedShip.ship;
                newGrid[row+2][col+1] = selectedShip.ship;
                newGrid[row+3][col+1] = selectedShip.ship;
                setSelectedShip(prevState => ({
                  ship: null,
                  rotation: prevState.rotation
                }));
              }

            }
            break;
          default:
            break;
        }
      }
    }
    setGrid(newGrid);
  };

  return (
    <div>
      <h2>Placement des bateaux</h2>
      {ship.map(navire => (
        <button key={navire} onClick={() => handleSelectShip(navire)}>{navire}</button>
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
              >{grid[rowIndex][colIndex]}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

};


export default Grid;
