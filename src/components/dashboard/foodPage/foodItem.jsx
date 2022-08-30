import FoodItemButton from "./FoodItemButton";

const FoodItem = ({ food }) => {
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
        </div>
        <div style={{ display: "grid", placeItems: "center" }}>
          <FoodItemButton food={food} />
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
