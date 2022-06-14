import React from "react";
import "./widget.css";

const Widgets = () => {
  const options = [
    {
      id: 1,
      name: "Food",
      link: "/food",
    },
    {
      id: 2,
      name: "Ride",
      link: "/ride",
    },
    {
      id: 3,
      name: "Dispatch",
      link: "/dispatch",
    },
  ];
  return (
    <div>
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
          <div className="optionCard">
            <a href={option.link}>
              <div>
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    margin: "auto",
                    height: "150px",
                    zIndex: "100",
                  }}
                >
                  <h2>{option.name}</h2>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Widgets;
