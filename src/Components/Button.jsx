import React from "react";

const Button = ({ onClick, text , Delete }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
