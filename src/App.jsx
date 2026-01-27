import { useState } from "react";
import DynamicID from "./Components/DynamicID";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Bulb from "./Components/Bulb";
import IDcard from "./Components/IDCard";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Bulb />,
    },
    {
      path: "/id-card",
      element: <IDcard />,
    },
    {
      path: "*",
      element: <h1>404 Not Found</h1>,
    },
  ];

  const [cardData, setCardData] = useState([]);
  const [currentId, setCurrentId] = useState(1);

  const handleAdd = (data) => {
    const newCard = {
      id: currentId + 1,
      ...data,
    };
    setCardData((prev) => [...prev, newCard]);
    setCurrentId((prev) => prev + 1);
  };

  const handleEdit = (data) => {
    setCardData(
      cardData.map((card) => (card.id === data.id ? { ...data } : card)),
    );
  };

  const handleDelete = (id) => {
    setCardData((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
    /*<div>
      <DynamicID onAdd={handleAdd} mode="add" />

      <h2>Existing ID Cards</h2>

      {cardData.map((card) => (
        <DynamicID
          key={card.id}
          id={card.id}
          name={card.name}
          position={card.position}
          age={card.age}
          onEdit={handleEdit}
          onDelete={handleDelete}
          mode="view"
        />
      ))} 
      </div>
      */
  );
};

export default App;
