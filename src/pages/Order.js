import React from "react";
import Footer from "../components/dashboard/footer/Footer";
import Sidenav from "../components/dashboard/nav/Sidenav";
import Nav from "../components/dashboard/topnav/Nav";

const Order = () => {
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
            Orders <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default Order;
