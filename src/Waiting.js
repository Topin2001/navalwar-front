import "./Waiting.css";
import React, { useEffect } from "react";

const WaitingPage = ({ setEtat, GameId }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(`https://localhost:7080/api/GameArea/state?gameId=${GameId}`)
        .then((response) => response.json())
        .then((data) => {
          const state = data.state;
          if (state === "Shooting") {
            setEtat(state);
          }
          console.log(state);
        });
    }, 2000);
  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div class="waiting-page">
      <h1>Please Wait</h1>
      <h3>Game ID : {GameId}</h3>
      <p>Merci d'attendre que votre camarade place ses bateaux.</p>
    </div>
  );
}

export default WaitingPage;
