import React from "react";
import Footer from "../../../../components/dashboard/footer/Footer";
import Sidenav from "../../../../components/dashboard/nav/Sidenav";
import Nav from "../../../../components/dashboard/topnav/Nav";
import Newdispatch from "../../../../components/dashboard/dispatch/Dispatch";
const Dispatch = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Sidenav />
          <main className="col-md-12 ml-sm-auto col-lg-10 px-md-4 py-4">
            <Newdispatch />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dispatch;
