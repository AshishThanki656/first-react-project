import React, { useState } from "react";
import "../styles/DynamicID.css";

function DynamicID({
  id,
  name,
  position,
  age,
  mode = "add",
  onAdd,
  onEdit,
  onDelete,
}) {
  const [formData, setformData] = useState({
    name: name || "",
    position: position || "",
    age: age || undefined,
    id: id || undefined,
  });

  const [editToggle, setEditToggle] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setformData({ ...formData, [name]: value });
  };

  const handleEdit = (data) => {
    onEdit(formData);
    setEditToggle(false);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  const fieldReadOnly = mode === "view" && !editToggle;

  return (
    <div className="id-card">
      <div className="input-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          readOnly={fieldReadOnly}
          onChange={handleChange}
          placeholder="Enter Your Name"
          required
        />
      </div>

      <div className="input-group">
        <label>Position</label>
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          readOnly={fieldReadOnly}
          placeholder="Enter Your Position"
          required
        />
      </div>

      <div className="input-group">
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          readOnly={fieldReadOnly}
          placeholder="Enter Your Age"
          required
        />

        <div className="actions">
          {mode === "add" ? (
            <button className="new" onClick={() => onAdd(formData)}>
              Add
            </button>
          ) : (
            <>
              {!editToggle ? (
                <button className="edit" onClick={() => setEditToggle(true)}>
                  Edit
                </button>
              ) : (
                <button className="new" onClick={handleEdit}>
                  Save
                </button>
              )}
              <button
                className="delete"
                onClick={() => handleDelete(formData.id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default DynamicID;
