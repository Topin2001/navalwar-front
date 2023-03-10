import "./Loose.css";
import React from "react";

function LoosePage({setEtat}) {
  return (
    <div className="loose-page">
      <h1>Défaite !</h1>
      <p>Oh non, l'ennemi à coulé tout tes bateaux.</p>
      <div onClick={() => setEtat("Login")}>
        <button>Rejouer</button>
      </div>
    </div>
  );
}

export default LoosePage;
