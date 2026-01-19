import React from "react";

function IDCard({ name, role, age }) {

  return (
    <div className="card"
      style={{
        backgroundColor: role === "captain" ? "blue" 
        : role === "engineer"
        ? "red"  : role === "scientist" ? "green" : "transparent"
      }}
    >
      <h2>{name}</h2>
      <p>Role:{role}</p>
      <p>Age:{age}</p>
    </div>
  );
}

export default IDCard;
