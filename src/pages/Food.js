import React from "react";
import Content from "../components/dashboard/content/Content";
import Sidenav from "../components/dashboard/nav/Sidenav";
import Nav from "../components/dashboard/topnav/Nav";
import "../components/dashboard/nav/css/sidenav.css";
import Footer from "../components/dashboard/footer/Footer";
import Foodmain from "../components/dashboard/foodPage/Foodmain";
const Food = () => {
  return (
    <>
      <Nav />
      <div class="container-fluid">
        <div class="row">
          <Sidenav />
          <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
            <Foodmain /> <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default Food;
