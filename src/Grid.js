import GridPlacement from "./GridPlacement";
import GridPlay from "./GridPlay";
import VictoryPage from "./Win";
import LoosePage from "./Loose";
import React, { useState } from "react";

const Grid = () => {
  const [Etat, setEtat] = useState(["Placement"]);

  const grid_size = 10;

  if (Etat == "Placement") {
    return <GridPlacement grid_size={grid_size} setEtat={setEtat} />;
  } else if (Etat == "Jeux") {
    return <GridPlay grid_size={grid_size} setEtat={setEtat} />;
  } else if (Etat == "Win") {
    return <VictoryPage setEtat={setEtat} />;
  } else if (Etat == "Loose") {
    return <LoosePage setEtat={setEtat} />;
  }
};

export default Grid;
