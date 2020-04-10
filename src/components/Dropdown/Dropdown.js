import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = (event) => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="container">
      <button onClick={toggleDropdown}>{props.label}</button>
      <div
        className={visible ? "drop-down-visible" : "drop-down-hidden"}
        onClick={toggleDropdown}
      >
        {props.options.map((option) => (
          <button
            key={option.value}
            value={option.value}
            onClick={props.onChange}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
