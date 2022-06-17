import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./food.css";
import GoogleAuth from "../../googleauth/GoogleContext";
import FoodItem from "./foodItem";

const Foodmain = () => {
  const navigate = useNavigate();

  const { foods, categories } = useContext(GoogleAuth);

  const [input, setInput] = useState("");

  return (
    <>
      <div className="food-main-nav-flex">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
            fillRule="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </div>
        <div>
          <h2>Find and order food for you</h2>
        </div>
      </div>
      <div className="food-main-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="search for a food of your choice"
        />
      </div>
      <div className="food-main-chip-container">
        <strong>Categories</strong>
        <div className="food-main-chip-flex">
          <div className="food-chip">All</div>
          {categories.map((category) => (
            <div key={category.id} className="food-chip">
              {category.name}
            </div>
          ))}
        </div>
      </div>
      <div>
        <strong>Popular</strong>
      </div>
      <div className="food-main-card-grid">
        {foods
          .filter((names) => names.name.toLowerCase().includes(input))
          .map((item) => (
            <FoodItem key={item.id} food={item} />
          ))}
      </div>
    </>
  );
};

export default Foodmain;
