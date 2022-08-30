import React from "react";
import "./css/spin.css";

const Spinner = () => {
  return (
    <div style={{ width: "60vw", height: "auto", opacity: "0.8" }}>
      <div className="spinner-container">
        <span>please wait</span>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default Spinner;
