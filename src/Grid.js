import "./Grid.css";
import GridPlacement from "./GridPlacement";
import GridPlay from "./GridPlay";
import React, { useState } from "react";

const Grid = () => {
  const [Etat, setEtat] = useState(["Placement"]);

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

  if (Etat == "Placement") {
    return (
      <GridPlacement
        grid={grid}
        grid_size={grid_size}
        setEtat={setEtat}
        setGrid={setGrid}
      />
    );
  } else {
    return (
      <GridPlay />
    );
  }
};

export default Grid;
