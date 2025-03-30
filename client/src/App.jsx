import React, { useState } from "react";
import Inputs from "./components/inputs";
import Text from "./components/text";
import Visual from "./components/visual";


const defFlight = {
  altitude: 0,
  his: 0,
  adi: 0,
};

function App() {

  const [mode, setMode] = useState("add");
  const [lastFlight, setLastFlight] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>

        <button onClick={() => setMode("text")}>TEXT</button>
        <button onClick={() => setMode("visual")}>VISUAL</button>
        <button onClick={() => setMode("add")}>+</button>
      </div>

      
      {mode === "add" && <Inputs setLastFlight={setLastFlight} />}
      {mode === "text" && <Text data={lastFlight || defFlight} />}
      {mode === "visual" && <Visual data={lastFlight || defFlight} />}

    </div>
  );
}

export default App;
