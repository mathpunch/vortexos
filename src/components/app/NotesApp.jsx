import React, { useState } from "react";

export default function NotesApp() {
  const [text, setText] = useState(localStorage.getItem("vortex-notes") || "");
  return (
    <textarea
      className="notes-app"
      value={text}
      onChange={e => {
        setText(e.target.value);
        localStorage.setItem("vortex-notes", e.target.value);
      }}
      placeholder="Write your notes here..."
    />
  );
}
