import React from "react";

export default function Taskbar({ apps, onAppClick }) {
  return (
    <div className="taskbar">
      <div className="taskbar-logo">🌀 Vortex OS</div>
      <div className="taskbar-apps">
        {apps.map(app => (
          <button
            key={app.id}
            className="taskbar-btn"
            title={app.name}
            onClick={() => onAppClick(app.id)}
          >
            {app.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
