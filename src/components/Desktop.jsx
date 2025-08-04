import React, { useState } from "react";
import Taskbar from "./Taskbar";
import WindowManager from "./WindowManager";
import { initialApps } from "./apps/appList";

export default function Desktop() {
  const [windows, setWindows] = useState([]);
  const [apps] = useState(initialApps);

  const openApp = appId => {
    const app = apps.find(a => a.id === appId);
    if (app) {
      setWindows(wins => [
        ...wins,
        {
          ...app,
          winId: Date.now() + Math.random().toString().slice(2),
          z: wins.length,
        }
      ]);
    }
  };

  return (
    <div className="desktop-bg">
      <WindowManager windows={windows} setWindows={setWindows} />
      <Taskbar apps={apps} onAppClick={openApp} />
    </div>
  );
}
