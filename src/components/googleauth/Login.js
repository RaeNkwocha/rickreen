import React, { useEffect, useState, useContext } from "react";
import jwt_decode from "jwt-decode";
import GoogleAuth from "./GoogleContext";

function Login() {
  const { googleuser, setGoogleUser } = useContext(GoogleAuth);
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setGoogleUser(userObject);
    console.log(userObject);

    // document.getElementById("signInDiv").hidden = true;
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "862370139616-k84j00vfaheb2s8u8av7ugfoc28k7m05.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("sigInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div>
      <div id="sigInDiv">
        {googleuser && (
          <div>
            <img src={googleuser.picture} />
            <h3>{googleuser.name}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
