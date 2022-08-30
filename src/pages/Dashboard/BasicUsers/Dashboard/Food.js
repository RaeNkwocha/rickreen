import React from "react";
import Sidenav from "../../../../components/dashboard/nav/Sidenav";
import Nav from "../../../../components/dashboard/topnav/Nav";
import "../../../../components/dashboard/nav/css/sidenav.css";
import Footer from "../../../../components/dashboard/footer/Footer";
import Foodmain from "../../../../components/dashboard/foodPage/Foodmain";
const Food = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Sidenav />
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
            <Foodmain /> <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default Food;
