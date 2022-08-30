import { atom, selector } from "recoil";

const _cartState = atom({
  key: "_cartState",
  default: JSON.parse(localStorage.getItem("cart") || "[]") || [],
});
const cartState = selector({
  key: "cartState",
  get: ({ get }) => {
    return get(_cartState);
  },
  set: ({ set }, newValue = []) => {
    set(_cartState, newValue);
    localStorage.setItem("cart", JSON.stringify(newValue));
    return;
  },
});

export const cartLengthState = selector({
  key: "cartLengthState",
  get({ get }) {
    return get(_cartState).length;
  },
});

export const cartQtyState = selector({
  key: "cartQtyState",
  get({ get }) {
    return get(_cartState).reduce((qty, cartItem) => (qty += cartItem.qty), 0);
  },
});

export const cartTotalAmountState = selector({
  key: "cartTotalAmountState",
  get({ get }) {
    return get(_cartState).reduce(
      (price, cartItem) => (price += cartItem.qty * cartItem.item.amount),
      0
    );
  },
});
export default cartState;
