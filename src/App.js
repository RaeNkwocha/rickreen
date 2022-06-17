import "./App.css";
import { RecoilRoot } from "recoil";
import { LoginProvider } from "./components/googleauth/GoogleContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Home from "./pages/Home";
import Food from "./pages/Food";
import Ride from "./pages/Ride";
import Dispatch from "./pages/Dispatch";
import PlaceOrder from "./pages/PlaceOrder";
function App() {
  return (
    <div>
      <LoginProvider>
        <RecoilRoot>
          <Router>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/food/orders"
                  children={false}
                  element={<Order />}
                />
                <Route path="/food" children={false} element={<Food />} />
                <Route
                  path="/food/order/place-orders"
                  children={false}
                  element={<PlaceOrder />}
                />
                <Route path="/ride" element={<Ride />} />
                <Route path="/dispatch" element={<Dispatch />} />
              </Route>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </RecoilRoot>
      </LoginProvider>
    </div>
  );
}

export default App;
