import React from "react";
import { motion } from "framer-motion";

export default function AppWindow({ win, onClose }) {
  const AppComponent = win.component;
  return (
    <motion.div className="window" drag dragConstraints={{ left: 0, top: 0 }}>
      <div className="window-titlebar">
        <span>{win.icon} {win.name}</span>
        <button className="window-close" onClick={onClose}>×</button>
      </div>
      <div className="window-content">
        <AppComponent />
      </div>
    </motion.div>
  );
}
