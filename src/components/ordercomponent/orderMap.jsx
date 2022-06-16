import React, { useContext, useState } from "react";
import "./css/price.css";
import GoogleAuth from "../googleauth/GoogleContext";

const OrderMap = ({ item, qty, setQty }) => {
  const { cart, setCart } = useContext(GoogleAuth);
  const [newQty, setNewQty] = useState(1);
  const handleQty = () => {
    setNewQty(newQty + 1);
    setQty(qty + 1);
  };
  const reduceQty = (id) => {
    if (qty === 0) {
      setCart(cart.filter((item) => item.id !== id));
    }
    if (newQty === 0) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setQty(qty - 1);
      setNewQty(newQty - 1);
    }
  };
  return (
    <div>
      {" "}
      <div key={item.id}>
        <div className="food-main-card">
          {" "}
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <img src={item.images?.[0].formats.thumbnail.url} />
          </div>
          <div className="food-main-text-holder">
            <div> {item.name}</div>
            <p> {item.amount}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
            }}
            className="qty-btn-add-sub"
          >
            <div>
              {" "}
              <button onClick={() => handleQty(item.id)}>+</button>
            </div>
            <div className="qty">{newQty}</div>
            <div>
              <button onClick={() => reduceQty(item.id)}>-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMap;
