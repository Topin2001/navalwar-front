import "./Grid.css";
import React, { useState, useEffect } from "react";

const GridPlay = ({ setEtat, PlayerId, GameId }) => {
  const [Turn, setTurn] = useState(null);
  const [shipGrid, setShipGrid] = useState([]);
  const [shotGrid, setShotGrid] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(`https://localhost:7080/api/GameArea?gameId=${GameId}`)
        .then((response) => response.json())
        .then((data) => {
          setShipGrid(data[PlayerId - 1].shipBoard);
          setShotGrid(data[PlayerId - 1].shotBoard);
        })
        .catch((error) => {
          console.error("Error fetching grid:", error);
        })
        .then(() => {
          console.log("Test de win");
          fetch(`https://localhost:7080/api/GameArea/state?gameId=${GameId}`)
            .then((response) => response.json())
            .then((data) => {
              setTurn(data.turn);
              if (
                (data.state === "P1Win" && PlayerId === 1) ||
                (data.state === "P2Win" && PlayerId === 2)
              ) {
                setEtat("Win");
              } else if (data.state === "Shooting") {
                console.log("Reste en shooting");
              } else {
                setEtat("Loose");
              }
            })
            .catch((error) => {
              console.error("Error fetching grid:", error);
            });
        });
    }, 500); // la valeur de 2000 représente le délai de 2 secondes entre chaque appel de la fonction fetch

    return () => clearInterval(intervalId); // nettoyer l'intervalle pour éviter les fuites de mémoire
  }, []); // l'array vide [] signifie que le useEffect ne doit s'exécuter qu'une seule fois au montage du composant

  const handleShot = (rowIndex, colIndex) => {
    console.log(rowIndex, colIndex);
    console.log(
      `https://localhost:7080/api/GameArea/${PlayerId}?gameId=${GameId}&x=${rowIndex}&y=${colIndex}`
    );
    fetch(
      `https://localhost:7080/api/GameArea/${PlayerId}?gameId=${GameId}&x=${rowIndex}&y=${colIndex}`,
      {
        method: "POST",
      }
    )
      .catch((error) => console.error("Error shooting:", error))
      .then(() => {
        console.log("Get des grid");
        fetch(`https://localhost:7080/api/GameArea?gameId=${GameId}`)
          .then((response) => response.json())
          .then((data) => {
            setShipGrid(data[PlayerId - 1].shipBoard);
            setShotGrid(data[PlayerId - 1].shotBoard);
          })
          .catch((error) => {
            console.error("Error fetching grid:", error);
          });
      });
  };

  const getClass = (col) => {
    switch (col) {
      case "V":
        return "ship";
      case "-":
        return "miss";
      case "X":
        return "hit";
      case "C":
        return "down"
      default:
        return "default";
    }
  }  

  return (
    <div class="container">
      <div class="shipcontainer">
        <h1>Tes bateaux</h1>
        <div className="shipgrid">
          {shipGrid.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((col, colIndex) => (
                <div
                  className={`col ${getClass(col)}`}
                  key={colIndex}
                >
                  {shipGrid[rowIndex][colIndex]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <h2>Tu es joueur {PlayerId}</h2>
      <div class="shotcontainer">
        <h1>Tes tirs</h1>
        <h3>C'est au tour du joueur {Turn} de tirer!</h3>
        <div className="shotgrid">
          {shotGrid.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((col, colIndex) => (
                <div
                  className={`col ${getClass(col)}`}
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
    </div>
  );
};

export default GridPlay;
