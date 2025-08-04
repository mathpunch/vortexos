import React, { useState } from "react";

export default function SetupScreen({ onComplete }) {
  const [username, setUsername] = useState("");
  return (
    <div className="setup-screen">
      <div className="setup-card">
        <h1>Welcome to <span className="vortex-logo">Vortex OS</span></h1>
        <p>Get started by creating your user.</p>
        <input
          className="setup-input"
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button
          className="setup-btn"
          disabled={!username}
          onClick={() => {
            localStorage.setItem("vortexos-username", username);
            onComplete();
          }}
        >
          Start Vortex OS
        </button>
      </div>
    </div>
  );
}
