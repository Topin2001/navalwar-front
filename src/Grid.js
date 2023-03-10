import React, { useState, useEffect } from "react";
import Login from "./Login";
import GridPlacement from "./GridPlacement";
import GridPlay from "./GridPlay";
import VictoryPage from "./Win";
import LoosePage from "./Loose";

const Grid = () => {
  const [GameId, setGameId] = useState(null);
  const [PlayerId, setPlayerId] = useState(null);
  const [Etat, setEtat] = useState("Login");
  const grid_size = 10;

  /*useEffect(() => {
    fetch("https://localhost:7080/api/GameArea/state")
      .then((response) => response.json())
      .then(data => {
      const state = data.state;
      setEtat(state)
      console.log(state);
      })
      .then((data) => console.log(data))
  }, []);*/

  if (Etat === null) {
    // Render a loading indicator while the state is being fetched
    return <div>Loading...</div>;
  }

  if (Etat === "Login") {
    return <Login setEtat={setEtat} setGameId={setGameId} setPlayerId={setPlayerId} />;
  } else if (Etat === "Placement") {
    return <GridPlacement setEtat={setEtat} GameId={GameId} PlayerId={PlayerId} />;
  } else if (Etat === "Jeux") {
    return <GridPlay grid_size={grid_size} setEtat={setEtat} />;
  } else if (Etat === "Win") {
    return <VictoryPage setEtat={setEtat} />;
  } else if (Etat === "Loose") {
    return <LoosePage setEtat={setEtat} />;
  } else {
    // Render an error message if the state is invalid
    console.log(Etat);
    return <div>Error: Invalid state</div>;
    
  }
};

export default Grid;
