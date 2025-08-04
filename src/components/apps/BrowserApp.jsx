import React, { useState } from "react";

export default function BrowserApp() {
  const [url, setUrl] = useState("https://www.google.com/webhp?igu=1");
  const [input, setInput] = useState(url);

  const handleGo = () => setUrl(input);

  return (
    <div className="browser-app">
      <div className="browser-nav">
        <input
          className="browser-url"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleGo()}
        />
        <button className="browser-gobtn" onClick={handleGo}>Go</button>
      </div>
      <iframe
        className="browser-iframe"
        src={url}
        title="Web Browser"
        sandbox="allow-same-origin allow-scripts allow-forms"
      />
    </div>
  );
}
