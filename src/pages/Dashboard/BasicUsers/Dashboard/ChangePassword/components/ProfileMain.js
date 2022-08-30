import React from "react";
import authService from "../../../../../../services/Services";
import ChangePhoto from "./ChangePhoto";
import FormFields from "./passwordForm/FormFields";

const ProfileMain = () => {
  let user = authService.user;

  return (
    <>
      <div style={{padding:"20px"}}>
        {" "}
        <h2>Welcome {user.username}</h2>{" "}
        <p>You can update your user profile here</p>
        <ChangePhoto />
        <FormFields/>
      </div>
    </>
  );
};

export default ProfileMain;
