import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import cartState from "../../../shared/atoms/auth";

const FoodItemButton = ({ food }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useRecoilState(cartState);
  const isInCart = () => {
    return cart.findIndex((cartItem) => cartItem.item.id === food.id) !== -1;
  };

  const viewCart = () => {
    if (cart.findIndex((cartItem) => cartItem.item.id === food.id) !== -1) {
      navigate("orders");
      return;
    }
    setCart([...cart, { item: food, qty: 1 }]);
  };
  return (
    <button className="food-main-text-holder-btn" onClick={viewCart}>
      {isInCart() ? <div>View cart</div> : <div>Add to cart</div>}
    </button>
  );
};

export default FoodItemButton;
