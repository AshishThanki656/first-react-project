import React from "react";
import "../styles/DynamicID.css";

function DynamicID({ name, position, age, mode }) {
  return (
    <div className="id-card">
      <div className="input-group">
        <label>Name</label>
        <input type="text" placeholder="Enter Your Name"></input>
      </div>

      <div className="input-group">
        <label>Position</label>
        <input type="text" placeholder="Enter Your Position"></input>
      </div>

      <div className="input-group">
        <label>Age</label>
        <input type="number" placeholder="Enter Your Age"></input>
      </div>

      <div className="actions">
        <button className="new">Add</button>
        <button>Edit</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
}

export default DynamicID;
