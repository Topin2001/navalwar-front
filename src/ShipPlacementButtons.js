import React, { useState } from 'react';

const ShipPlacementButtons = () => {
  const [selectedShip, setSelectedShip] = useState(null);

  const handleSelectShip = (ship) => {
    setSelectedShip(ship);
  };

  return (
    <div>
      <h2>Placement des bateaux</h2>
      <button onClick={() => handleSelectShip('Destroyer')}>Destroyer</button>
      <button onClick={() => handleSelectShip('Cruiser')}>Cruiser</button>
      <button onClick={() => handleSelectShip('Submarine')}>Submarine</button>
      <button onClick={() => handleSelectShip('Battleship')}>Battleship</button>
      <button onClick={() => handleSelectShip('Carrier')}>Carrier</button>
      <p>Selected Ship: {selectedShip}</p>
    </div>
  );
};

export default ShipPlacementButtons;
