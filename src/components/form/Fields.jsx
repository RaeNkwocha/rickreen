import React, { useEffect, useState } from "react";
import "./form.css";
const Fields = ({
  setUsername,
  setPassword,
  password,
  username,
  email,
  setEmail,
  loading,
}) => {
  const [cPassword, setCPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState("form-control");
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

  useEffect(() => {
    if (isCPasswordDirty) {
      if (password === cPassword) {
        setShowErrorMessage(false);
        setCPasswordClass("form-control is-valid");
      } else {
        setShowErrorMessage(true);
        setCPasswordClass("form-control is-invalid");
      }
    }
  }, [cPassword]);

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
  };

  return (
    <div className="first-input">
      <div className="confirm-passwrd">
        <label style={{ display: "block" }}>username</label>
        <input
          className={cPasswordClass}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
          name="username"
          disabled={loading}
          type="text"
          placeholder="username"
        />
      </div>
      <div className="confirm-passwrd" style={{ marginTop: "10px" }}>
        {" "}
        <label style={{ display: "block" }}>email</label>
        <input
          className={cPasswordClass}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          type="email"
          disabled={loading}
          required
          placeholder="email"
        />
      </div>
      <div className="confirm-passwrd" style={{ marginTop: "10px" }}>
        {" "}
        <label style={{ display: "block" }}>password</label>
        <input
          className={cPasswordClass}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
          disabled={loading}
          required
          type="password"
          placeholder="password"
        />
      </div>

      <div className="confirm-passwrd" style={{ marginTop: "10px" }}>
        <label style={{ display: "block" }}>confirm password</label>
        <input
          onChange={handleCPassword}
          type="password"
          required
          className={cPasswordClass}
          disabled={loading}
          id="confirmPassword"
          value={cPassword}
          placeholder="comfirm password"
        />
        {showErrorMessage && isCPasswordDirty ? (
          <div> Passwords did not match </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Fields;
