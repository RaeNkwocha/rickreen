import React from "react";
import Footer from "../../../../../../components/dashboard/footer/Footer";
import Sidenav from "../../../../../../components/dashboard/nav/Sidenav";
import Nav from "../../../../../../components/dashboard/topnav/Nav";
import "../css/styles.css";
import ProfileMain from "./ProfileMain";
const UpdateProfile = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Sidenav />
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
            < ProfileMain/>
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
