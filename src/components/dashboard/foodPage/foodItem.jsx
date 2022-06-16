import React, { useContext, useEffect, useState } from "react";
import GoogleAuth from "../../googleauth/GoogleContext";

const FoodItem = ({ food }) => {
  const [cartView, setCartView] = useState(false);
  const { cart, setCart } = useContext(GoogleAuth);
  const viewCart = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    setCartView(true);
  };

  return (
    <div>
      <div className="food-main-card">
        <div
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <img src={food.images?.[0].formats.thumbnail.url} />
        </div>
        <div className="food-main-text-holder">
          <div> {food.name}</div>
          <p> {food.amount}</p>
          {/* <p
            className="cart-desc"
            dangerouslySetInnerHTML={{ __html: food.information }}
          ></p> */}
        </div>
        <div style={{ display: "grid", placeItems: "center" }}>
          <button
            className="food-main-text-holder-btn"
            onClick={() => viewCart(food)}
          >
            {cartView ? <div>View cart</div> : <div>Add to cart</div>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
