import "./Win.css";
import React from "react";

function VictoryPage({setEtat}) {
  return (
    <div className="victory-page">
      <h1>Victoire !</h1>
      <p>Félicitations, vous avez coulé tous les navires ennemis.</p>
      <div onClick={() => setEtat("Loose")}>
        <button>Rejouer</button>
      </div>
    </div>
  );
}

export default VictoryPage;
