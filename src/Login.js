import React, { useState, useEffect } from 'react';


const Login = ({ setEtat, setGameId, setPlayerId }) => {

  const handleCreateGame = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://localhost:7080/api/GameArea/create', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to create game.');
      }

      const data = await response.json();
      console.log(data);
      setGameId(data);
      setPlayerId(1);
      setEtat('Placement');
    } catch (error) {
      console.error(error);
    }
  };

  const handleJoinGame = (event) => {
    event.preventDefault();
    setEtat("Placement");
  };

  return (
<div>
      <h1>Choisissez une option :</h1>
      <button onClick={handleCreateGame}>Créer une nouvelle partie</button>
      <div>
        <label>
          Rejoindre une partie :
          <input type="text" onChange={(e) => setGameId(e.target.value)} />
        </label>
        <button onClick={handleJoinGame}>Rejoindre</button>
      </div>
    </div>
  );
};

export default Login;

