import "./Grid.css";
import React, { useState, useEffect } from "react";

const GridPlacement = ({ setEtat, GameId, PlayerId }) => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(`https://localhost:7080/api/GameArea?gameId=${GameId}`)
        .then((response) => response.json())
        .then((data) => {
          setGrid(data[PlayerId - 1].shipBoard);
        })
        .catch((error) => {
          console.error("Error fetching grid:", error);
        });
    }, 500); // la valeur de 2000 représente le délai de 2 secondes entre chaque appel de la fonction fetch

    return () => clearInterval(intervalId); // nettoyer l'intervalle pour éviter les fuites de mémoire
  }, []);

  const [ship] = useState([
    "Destroyer",
    "Cruiser",
    "Submarine",
    "BattleShip",
    "AircraftCarrier",
  ]);

  const [selectedShip, setSelectedShip] = useState({
    ship: null,
    rotation: "horizontal",
  });

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
    console.log(selectedShip.ship);

    if (selectedShip.ship !== null) {
      fetch(
        `https://localhost:7080/api/GameArea?gameId=${GameId}&player=${PlayerId}&x=${row}&y=${col}&horizontal=${
          selectedShip.rotation !== "horizontal"
        }&type=${selectedShip.ship}`,
        {
          method: "POST",
        }
      )
        .catch((error) => console.error("Error placing ship:", error))
        .then((data) => {
          if (data.status !== 200) {
            console.log("Problème");
          } else {
            ship.splice(ship.indexOf(selectedShip.ship), 1);
            setSelectedShip((prevState) => ({
              ship: null,
              rotation: prevState.rotation,
            }));
          }
        })
        .then(() => {
          fetch(
            `https://localhost:7080/api/GameArea/ready?gameId=${GameId}&player=${PlayerId}`
          )
            .then((response) => {
              console.log(response);
              if (response.status === 200) {
                console.log("Ready");
                setEtat("Waiting");
              } else {
                console.log("Not Ready");
              }
            })
            .catch((error) => {
              console.error("Error fetching game state:", error);
            });
        })
        .catch((error) => {
          console.error("Error fetching game state and grid:", error);
        });
    }
  };

  return (
    <div>
      <h2>Placement des bateaux</h2>
      <h3>Game ID : {GameId}</h3>
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
                className={`col ${col !== " " ? "hit" : ""}`}
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

export default GridPlacement;
