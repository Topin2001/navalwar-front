import React, { useState, useEffect } from "react";
import Login from "./Login";
import GridPlacement from "./GridPlacement";
import WaitingPage from "./Waiting";
import GridPlay from "./GridPlay";
import VictoryPage from "./Win";
import LoosePage from "./Loose";

const Grid = () => {
  const [GameId, setGameId] = useState(null);
  const [PlayerId, setPlayerId] = useState(null);
  const [Etat, setEtat] = useState("Login");

  if (Etat === "Login") {
    return <Login setEtat={setEtat} setGameId={setGameId} GameId={GameId} setPlayerId={setPlayerId} />;
  } else if (Etat === "Placement") {
    return <GridPlacement setEtat={setEtat} GameId={GameId} PlayerId={PlayerId} />;
  } else if (Etat === "Waiting") {
    return <WaitingPage setEtat={setEtat} GameId={GameId} />;
  } else if (Etat === "Shooting") {
    return <GridPlay setEtat={setEtat} PlayerId={PlayerId} GameId={GameId} />;
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
