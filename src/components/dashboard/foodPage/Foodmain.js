import React from "react";
import { useNavigate } from "react-router-dom";
import "./food.css";
import beans from "./image/beans.png";
import fish from "./image/fish.png";
import meat from "./image/meat.png";
import rice from "./image/rice.png";
const Foodmain = () => {
  const navigate = useNavigate();

  const foodCategories = [
    {
      id: 1,
      name: "Rice",
      image: rice,
      price: "300.00",
    },
    {
      id: 2,
      name: "Beans",
      image: beans,
      price: "300.00",
    },
    {
      id: 4,
      name: "Meat",
      image: meat,
      price: "300.00",
    },
    {
      id: 5,
      name: "Fish",
      image: fish,
      price: "300.00",
    },
  ];
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
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </div>
        <div>
          <h2>Find and order food for you</h2>
        </div>
      </div>
      <div className="food-main-input">
        <input placeholder="search for a food of your choice" />
      </div>
      <div className="food-main-chip-container">
        <strong>Categories</strong>
        <div className="food-main-chip-flex">
          <div className="food-chip">All</div>
          {foodCategories.map((category) => (
            <div className="food-chip">{category.name}</div>
          ))}
        </div>
      </div>
      <div>
        <strong>Popular</strong>
      </div>
      <div className="food-main-card-grid">
        {foodCategories.map((item) => (
          <div>
            <div className="food-main-card">
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img style={{ marginTop: "30px" }} src={item.image} />
              </div>
              <div className="food-main-text-holder">
                <div> {item.name}</div>
                <p> {item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Foodmain;
