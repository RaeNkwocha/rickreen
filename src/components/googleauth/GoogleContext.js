import { createContext, useEffect, useMemo, useState } from "react";
import authService from "../../services/Services";

const GoogleAuth = createContext();

export function LoginProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  const [newQty, setNewQty] = useState(1);
  const [categories, setCategories] = useState([]);
  const [qty, setQty] = useState(cart.length);
  const url = authService.baseUrl;
  const dataMemo = useMemo(() => ({
    foods,
    setFoods,
    cart,
    setCart,
    qty,
    setQty,
    categories,
    setCategories,
  }));

  const fetchData = () => {
    fetch(url + "/foods")
      .then((res) => res.json())
      .then((result) => setFoods(result))
      .catch((error) => console.log("error"));
  };
  const fetchCategories = () => {
    fetch(url + "/food-categories")
      .then((res) => res.json())
      .then((result) => setCategories(result))
      .catch((error) => console.log("error"));
  };
  useEffect(() => {
    console.log(foods);
    fetchData();
    fetchCategories();
  }, []);

  return <GoogleAuth.Provider value={dataMemo}>{children}</GoogleAuth.Provider>;
}

export default GoogleAuth;
