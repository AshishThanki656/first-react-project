import React, { useState } from "react";
import IDCard from "./Components/IDCard";
// import Bulb from './Components/Bulb'

function App() {
  const [Data, setData] = useState([
    { id: 1, name: "Rogers", role: "Captain", age: 100 },
    { id: 2, name: "Stark", role: "Engineer", age: 45 },
    { id: 3, name: "Banner", role: "Scientist", age: 50 },
  ]);

  const HandleDelete = (id) => {
    const newData = Data.filter((d) => d.id !== id);
    setData(newData);
  };

  return (
    <div>
      {Data.map((d) => (
        <IDCard
          key={d.id}
          name={d.name}
          role={d.role}
          age={d.age}
          HandleDelete={() => HandleDelete(d.id)}
        />
      ))}
    </div>
  );
}

export default App;
