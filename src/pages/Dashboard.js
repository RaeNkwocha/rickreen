import React from "react";
import Content from "../components/dashboard/content/Content";
import Sidenav from "../components/dashboard/nav/Sidenav";
import Nav from "../components/dashboard/topnav/Nav";
import "../components/dashboard/nav/css/sidenav.css";
import Footer from "../components/dashboard/footer/Footer";

const Dashboard = () => {
  return (
    <>
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
            <Content />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
