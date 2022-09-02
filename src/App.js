import "./App.css";
import { RecoilRoot } from "recoil";
import { LoginProvider } from "./components/googleauth/GoogleContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import Dashboard from "./pages/Dashboard/BasicUsers/Dashboard/Dashboard";
import Order from "./pages/Dashboard/BasicUsers/Dashboard/Order";
import Home from "./pages/Home/Home";
import Food from "./pages/Dashboard/BasicUsers/Dashboard/Food";
import Ride from "./pages/Dashboard/BasicUsers/Dashboard/Ride";
import Dispatch from "./pages/Dashboard/BasicUsers/Dashboard/Dispatch";
import PlaceOrder from "./pages/Dashboard/BasicUsers/Dashboard/PlaceOrder";
import UpdateProfile from "./pages/Dashboard/BasicUsers/Dashboard/ChangePassword/components";
import OurServices from "./pages/ourServices";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Login from "./pages/Login";
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
                <Route path="/update-profile" element={<UpdateProfile/>}/>
              </Route>
              <Route path="/" element={<Home />} />
              <Route path="/our-services" element={<OurServices />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </RecoilRoot>
      </LoginProvider>
    </div>
  );
}

export default App;
