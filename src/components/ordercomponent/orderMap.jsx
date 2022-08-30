import { useRecoilState } from "recoil";
import cartState from "../../shared/atoms/auth";
import "./css/price.css";

const OrderMap = ({ cartItem }) => {
  const [cart, setCart] = useRecoilState(cartState);
  const handleQty = () => {
    setQty(cartItem.qty + 1);
  };
  const setQty = (newQty) => {
    const newCart = [...cart];
    const cartIndex = newCart.findIndex(
      (result) => result.item.id == cartItem.item.id
    );
    if (cartIndex == -1) {
      return;
    }
    newCart[cartIndex] = { ...cartItem, qty: newQty };
    setCart(newCart);
  };
  const reduceQty = () => {
    if (cartItem.qty - 1 === 0) {
      setCart(
        cart.filter((_cartItem) => _cartItem.item.id !== cartItem.item.id)
      );
    } else {
      setQty(cartItem.qty - 1);
    }
  };

  // console.log(cartItem.qty);
  return (
    <div>
      {" "}
      <div key={cartItem.item.id}>
        <div className="food-main-card">
          {" "}
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <img src={cartItem.item.images?.[0].formats.thumbnail.url} />
          </div>
          <div className="food-main-text-holder">
            <div> {cartItem.item.name}</div>
            <p> {cartItem.item.amount}</p>
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
              <button onClick={handleQty}>+</button>
            </div>
            <div className="qty">{cartItem.qty}</div>
            <div>
              <button onClick={reduceQty}>-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMap;
