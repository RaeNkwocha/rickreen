import React from "react";
import Navigation from "../../components/Nav/Navigation";
import Popup from "../../shared/modal/Popup";

const Login = () => {
  return (
    <>
      <Navigation />
      <div
        style={{ marginTop: "200px", display: "grid", placeItems: "center" }}
      >
        <h1>
          You don't have an account please
        </h1> <Popup />
      </div>
    </>
  );
};

export default Login;
