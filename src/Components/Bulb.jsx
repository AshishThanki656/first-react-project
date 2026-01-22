import React from "react";
import { useState } from "react";

function Bulb() {
  const [IsOn, setIsOn] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundColor: IsOn ? "yellow" : "grey",
          // border: "1px soild black ",
          borderRadius: "50%",
          height: "100px",
          width: "100px",
        }}
      ></div>

      <button onClick={() => setIsOn(!IsOn)}>
        { IsOn ? "switch off" : "switch on"}
      </button>
    </>
  );
}

export default Bulb;
