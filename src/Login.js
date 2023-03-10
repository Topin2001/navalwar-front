import React from "react";
import "./Login.css";

const Login = ({ setEtat, setGameId, GameId, setPlayerId }) => {
  const handleCreateGame = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://localhost:7080/api/GameArea/create",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create game.");
      }

      const data = await response.json();
      console.log(data);
      setGameId(data);
      setPlayerId(1);
      setEtat("Placement");
    } catch (error) {
      console.error(error);
    }
  };

  const handleJoinGame = (event) => {
    event.preventDefault();
    fetch(`https://localhost:7080/api/GameArea/join?gameId=${GameId}`).then(
      (response) => {
        if (response.status === 200) {
          setPlayerId(2);
          setEtat("Placement");
        } else {
          console.log("Partie pleine");
        }
      }
    );
  };

  return (
    <div class="Login">
      <h1>Choisissez une option :</h1>
      <button onClick={handleCreateGame}>Créer une nouvelle partie</button>
      <div>
        Rejoindre une partie :
        <label>
          <input type="text" onChange={(e) => setGameId(e.target.value)} />
        </label>
        <button onClick={handleJoinGame}>Rejoindre</button>
      </div>
    </div>
  );
};

export default Login;
