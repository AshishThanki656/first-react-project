import React, { useEffct, useEffect, useState } from "react";
import Button from "./Components/Button";
import './Components/theme.css'

const App = () => {
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    console.log("Ran at page Load");
    document.body.className=theme;
  }, [theme]);

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Toggle Theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      />

      <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
        Click Me To Change Theme
      </button>
    </div>
  );
};

export default App;
