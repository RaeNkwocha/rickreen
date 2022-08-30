import React from "react";
import { useRecoilState } from "recoil";
import cartState, { cartTotalAmountState } from "../../../../shared/atoms/auth";

const PlaceOrder = () => {
  const [cart] = useRecoilState(cartState);
  const price = useRecoilState(cartTotalAmountState);

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <div>
          {" "}
          <h2>Food Order checkout</h2>
        </div>{" "}
        {cart.map((cartItem) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>{cartItem.item.name}</div>
            <div>{cartItem.qty}</div>
            <div>{cartItem.item.amount}</div>
            <div>{cartItem.item.amount * cartItem.qty}</div>
          </div>
        ))}
        <div>{price}</div>
      </div>
    </div>
  );
};

export default PlaceOrder;
