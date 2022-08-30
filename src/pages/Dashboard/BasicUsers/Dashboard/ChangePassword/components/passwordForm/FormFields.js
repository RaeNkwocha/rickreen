import React from "react";
import "../../css/styles.css";

const FormFields = () => {
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <form>
        <div className="user-profile-form">
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "10px" }}>
              Username
            </label>
            <input placeholder="Update username" />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "10px" }}>
              Change Password
            </label>
            <input placeholder="Change Password" />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "10px" }}>
              {" "}
              Change Email
            </label>
            <input placeholder="Change Email"/>
          </div>
        </div>
        <input className="update-profile-btn" type="submit" value="Update profile"/>
        </form>
      </div>
    </>
  );
};

export default FormFields;
