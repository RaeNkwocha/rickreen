import React from "react";
import ride from "./image/ride.png";
import food from "./image/food.png";
import delivery from "./image/delivery (2).png";
import "./widget.css";

const Widgets = () => {
  const options = [
    {
      id: 1,
      name: "Food",
      link: "/food",
      image: food,
    },
    {
      id: 2,
      name: "Ride",
      link: "/ride",
      image: ride,
    },
    {
      id: 3,
      name: "Dispatch",
      link: "/dispatch",
      image: delivery,
    },
  ];
  return (
    <div className="order-holder">
      <div>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "300",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          What will you like to order?
        </h2>
      </div>
      <div className="options-grid">
        {options.map((option) => (
          <div key={option.id} className="optionCard">
            <a href={option.link}>
              <div>
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <h2>{option.name}</h2>
                </div>

                <img
                  style={{ paddingBottom: "30px" }}
                  width="100%"
                  src={option.image}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Widgets;
