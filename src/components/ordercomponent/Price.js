import React, { useContext, useEffect, useState } from "react";
import GoogleAuth from "../googleauth/GoogleContext";
import Addtoorder from "./Addtoorder";
import "./css/price.css";
import OrderMap from "./orderMap";
const Price = ({ qty, setQty }) => {
  const { cart } = useContext(GoogleAuth);
  const [input, setInput] = useState("");
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let price = 0;
    cart.map((item) => (price += qty * item.amount));
    setPrice(price);
  };

  useEffect(() => {
    handlePrice();
  }, [qty]);

  return (
    <>
      <div className="food-main-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="search for a food of your choice"
        />
      </div>
      <div className="order-main-grid-bxshadow">
        <div className="order-main-grid">
          <div className="qnty-holder">
            {" "}
            <h4>Quantity</h4>
            <h5>{qty}</h5>
          </div>
          <div className="qnty-holder-1">
            {" "}
            <h4>Price</h4>
            <h5>₦ {price}</h5>
          </div>
          <div className="qnty-holder-2">
            {" "}
            <h4>Delivery</h4>
            <h5>30 mins</h5>
          </div>
          <div className="qnty-holder-3">
            {" "}
            <h4>Payment</h4>
            <h5>Transfer</h5>
          </div>
        </div>

        <div className="food-order-main-grid-add-items">
          <div className="food-main-card-grid-one">
            {" "}
            {cart
              .filter((names) => names.name.toLowerCase().includes(input))
              .map((item) => (
                <OrderMap key={item.id} item={item} qty={qty} setQty={setQty} />
              ))}
          </div>
          <Addtoorder />
        </div>
      </div>
    </>
  );
};

export default Price;
