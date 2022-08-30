import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./css/popup.css";
import Login from "../../pages/Auth/Login/Login";
import Signup from "../../pages/Auth/Register/Signup";
import authService from "../../services/Services";
import ButtonDarkExample from "../../components/Settingsdropdwn";

const Popup = () => {
  const [open, setOpen] = React.useState(false);
  const [sigin, setSigin] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSigin = () => {
    setSigin(!sigin);
  };
  const user = authService.user;
  console.log(user, "user");

  return (
    <div>
      <li style={{ listStyle: "none", cursor: "pointer" }}>
        {user ? (
          <ButtonDarkExample />
        ) : (
          <button
            style={{ border: "none", outline: "none", background: "none" }}
            onClick={handleOpen}
          >
            Login
          </button>
        )}
      </li>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            height: "auto",
          }}
          aria-describedby="modal-modal-description"
        >
          <Box className="sigin-container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px",
              }}
            >
              <div>
                <img
                  height="40px"
                  src="https://rickreen.net/assets/png/logo.png"
                  alt=""
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                  onClick={handleClose}
                  style={{ cursor: "pointer" }}
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
            </div>
            <div className="typo-holder">
              {sigin ? (
                <div>
                  {" "}
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Create Account
                  </Typography>
                </div>
              ) : (
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Welcome Back
                </Typography>
              )}

              <div
                style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
              >
                <Typography id="modal-modal-description">
                  {sigin ? (
                    <div>Do you have an account? </div>
                  ) : (
                    <div>Don’t have an account? </div>
                  )}
                </Typography>

                <span style={{ color: "#6AA3FF" }}>
                  <button
                    style={{
                      background: "none",
                      outline: "none",
                      border: "none",
                      color: "#6AA3FF",
                      fontWeight: "bold",
                    }}
                    onClick={handleSigin}
                  >
                    {sigin ? <div>Login </div> : <div>Signup</div>}
                  </button>
                </span>
              </div>
            </div>
            {sigin ? <Login setOpen={setOpen} /> : <Signup setOpen={setOpen} />}
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Popup;
