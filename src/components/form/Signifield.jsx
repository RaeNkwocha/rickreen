import React from "react";

const Signifield = ({
  setIdentifier,
  setPassword,
  password,
  identifier,
  loading,
}) => {
  return (
    <div className="first-input">
      <div className="confirm-passwrd">
        <label style={{ display: "block" }}>username</label>
        <input
          onChange={(e) => setIdentifier(e.target.value)}
          value={identifier}
          disabled={loading}
          name="username"
          required
          type="text"
          placeholder="username"
        />
      </div>
      <div className="confirm-passwrd" style={{ marginTop: "10px" }}>
        {" "}
        <label style={{ display: "block" }}>password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={loading}
          required
          name="password"
          type="password"
          placeholder="password"
        />
      </div>
    </div>
  );
};

export default Signifield;
