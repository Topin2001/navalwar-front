import "./Grid.css";
import GridPlacement from "./GridPlacement";
import GridPlay from "./GridPlay";
import React, { useState } from "react";

const Grid = () => {
  const [Etat, setEtat] = useState(["Placement"]);

  const grid_size = 10;

  if (Etat == "Placement") {
    return <GridPlacement grid_size={grid_size} setEtat={setEtat} />;
  } else {
    return <GridPlay grid_size={grid_size} />;
  }
};

export default Grid;
