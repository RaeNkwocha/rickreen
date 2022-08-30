import React from "react";
import App from "../../../../components/app/App";
import Footer from "../../../../components/dashboard/footer/Footer";
import Sidenav from "../../../../components/dashboard/nav/Sidenav";
import Nav from "../../../../components/dashboard/topnav/Nav";
import "../../../css/styles.css";

const Ride = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Sidenav />
          <main className="col-md-12 ml-sm-auto col-lg-10 px-md-4 py-4">
            <div>
              <div style={{ display: "grid", placeItems: "center" }}>
                {" "}
                <h3 style={{ textAlign: "center" }}>
                  Download our app on playstore and order rides at cheap and
                  affordable prices
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  style={{ marginTop: "15px" }}
                  fill="currentColor"
                  className="app-button-download"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                  />
                </svg>
              </div>
              <div style={{ marginTop: "-20px" }}>
                {" "}
                <App />
              </div>
            </div>{" "}
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default Ride;
