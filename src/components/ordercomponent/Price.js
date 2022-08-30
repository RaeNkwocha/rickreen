import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import cartState, {
  cartQtyState,
  cartTotalAmountState,
} from "../../shared/atoms/auth";
import Addtoorder from "./Addtoorder";
import "./css/price.css";
import OrderMap from "./orderMap";
const Price = ({}) => {
  const [cart] = useRecoilState(cartState);
  const [input, setInput] = useState("");
  const price = useRecoilState(cartTotalAmountState);
  const cartQty = useRecoilValue(cartQtyState);

  return (
    <>
      <div className="food-main-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="search for your orders"
        />
      </div>
      <div className="order-main-grid-bxshadow">
        <div className="order-main-grid">
          <div className="qnty-holder">
            {" "}
            <h4>Quantity</h4>
            <h5>{cartQty}</h5>
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
              .filter((cartItem) =>
                cartItem.item.name.toLowerCase().includes(input)
              )
              .map((cartItem) => (
                <OrderMap key={cartItem.item.id} cartItem={cartItem} />
              ))}
          </div>
          <Addtoorder />
        </div>
      </div>
    </>
  );
};

export default Price;
