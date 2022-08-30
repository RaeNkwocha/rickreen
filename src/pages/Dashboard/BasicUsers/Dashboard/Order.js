import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import cartState from "../../../../shared/atoms/auth";
import Footer from "../../../../components/dashboard/footer/Footer";
import Sidenav from "../../../../components/dashboard/nav/Sidenav";
import Nav from "../../../../components/dashboard/topnav/Nav";

import Price from "../../../../components/ordercomponent/Price";

const Order = () => {
  const cart = useRecoilValue(cartState);

  return (
    <>
      {" "}
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebar"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            {" "}
            <Sidenav />
          </nav>
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
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
                <Price />
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
