import React, { useContext, useState } from "react";
import Footer from "../components/dashboard/footer/Footer";
import Sidenav from "../components/dashboard/nav/Sidenav";
import Nav from "../components/dashboard/topnav/Nav";
import GoogleAuth from "../components/googleauth/GoogleContext";
import OrderMap from "../components/ordercomponent/orderMap";
import Price from "../components/ordercomponent/Price";

const Order = () => {
  const { cart } = useContext(GoogleAuth);
  const [newQty, setNewQty] = useState(1);

  const [qty, setQty] = useState(cart.length);
  const [input, setInput] = useState("");

  return (
    <>
      {" "}
      <Nav />
      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebar"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            {" "}
            <Sidenav />
          </nav>
          <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
            {cart.length === 0 ? (
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  marginTop: "20vh",
                }}
              >
                <h1>You have no orders. Go to shop</h1>
              </div>
            ) : (
              <div>
                {" "}
                <Price qty={qty} setQty={setQty} />
                <div>
                  <h3 style={{ marginTop: "30px" }}>Your Orders</h3>
                </div>
              </div>
            )}
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default Order;
