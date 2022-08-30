import React, { useEffect, useState } from "react";
import Signifield from "./Signifield";
import authService from "../../services/Services";
import Spinner from "../../shared/loader/Spinner";
const Signin = ({ setOpen }) => {
  const [identifier, setIdentifier] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    console.log({ identifier, password });
    try {
      await authService.sigin(identifier, password).then(() => {
        setLoading(false);
        setErr("");
        window.location.href = "/dashboard";
        setOpen(false);
      });
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
      if (error.message == "Request failed with status code 400") {
        setErr("invalid username or passsword");
      } else {
        setErr(error.message);
      }

      console.log(err, "hey");
    }
  };

  return (
    <div>
      {loading ? <Spinner err={err} /> : ""}
      {err ? <label style={{ color: "red" }}>{err}</label> : null}
      <form onSubmit={login}>
        <Signifield
          loading={loading}
          setIdentifier={setIdentifier}
          setPassword={setPassword}
          password={password}
          identifier={identifier}
        />
        <input
          style={{
            background: "#3A85FF",
            outline: "none",
            border: "none",
            padding: "8px",
            color: "white",
            fontWeight: "bold",
            borderRadius: "50px",
          }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default Signin;
