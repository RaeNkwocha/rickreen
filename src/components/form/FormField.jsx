import React, { useEffect, useState } from "react";

import Fields from "./Fields";
import authService from "../../services/Services";
import Spinner from "../../shared/loader/Spinner";
const FormField = ({ setOpen }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      await authService.signUp(email, password, username).then(() => {
        setLoading(false);
        setErr("hey");
        window.location.href = "/dashboard";
        setOpen(false);
      });
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
      setErr("email already taken");
      console.log(err, "hey");
    }
  };

  return (
    <div>
      {loading ? <Spinner err={err} /> : ""}
      {err ? <label style={{ color: "red" }}>{err}</label> : ""}
      <form onSubmit={handleLogin}>
        <Fields
          loading={loading}
          email={email}
          setPassword={setPassword}
          username={username}
          setUsername={setUsername}
          password={password}
          setEmail={setEmail}
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
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default FormField;
