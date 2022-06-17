import React from "react";
import { Link } from "react-router-dom";

const Addtoorder = () => {
  return (
    <div>
      <Link to="/food" style={{ color: "black", textDecoration: "none" }}>
        {" "}
        <div className="order-add-item">
          <label style={{ display: "block" }}>Add item</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        </div>
      </Link>

      <Link to="/food/order/place-orders">
        {" "}
        <button style={{ width: "100%" }} className="order-place-order">
          Place your order
        </button>
      </Link>
    </div>
  );
};

export default Addtoorder;
