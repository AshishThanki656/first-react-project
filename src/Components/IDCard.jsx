import React from "react";

const IDCard = ({ name, role, age, HandleDelete }) => {
  return (
    <div
      className="card"  
      style={{
        backgroundColor:
          role === "captain"
            ? "blue"
            : role === "engineer"
              ? "red"
              : role === "scientist"
                ? "green"
                : "transparent",
      }}
    >
      <h2>{name}</h2>
      <p>Role:{role}</p>
      <p>Age:{age}</p>
      <button onClick={HandleDelete}>Delete</button>
    </div>
  );
};
export default IDCard;
