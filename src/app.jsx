import React, { useState, useEffect } from "react";
import SetupScreen from "./components/SetupScreen";
import Desktop from "./components/Desktop";

export default function App() {
  const [setupComplete, setSetupComplete] = useState(
    localStorage.getItem("vortexos-setup") === "complete"
  );

  useEffect(() => {
    if (setupComplete) {
      localStorage.setItem("vortexos-setup", "complete");
    }
  }, [setupComplete]);

  return (
    <div className="vortex-root">
      {!setupComplete ? (
        <SetupScreen onComplete={() => setSetupComplete(true)} />
      ) : (
        <Desktop />
      )}
    </div>
  );
}
