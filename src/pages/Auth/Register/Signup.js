import React from "react";
import Signin from "../../../components/form/Signin";

const Signup = ({ setOpen }) => {
  return (
    <div>
      <div>
        <div className="signin-flex">
          <div className="first-flex">
            <div className="first-input">
              <Signin setOpen={setOpen} />
            </div>

            <div style={{ marginTop: "1px", marginLeft: "10px" }}>
              <div>
                Remember me{" "}
                <p>
                  {" "}
                  <input type="checkbox" name="vehicle1" value="Bike" />
                </p>
              </div>
            </div>
            <div className="spacer">
              <div className="underline-one"></div>
              <div className="spacer-box">or continue with</div>
              <div className="underline-two"></div>
            </div>
            <div className="login-logo">
              <div>
                <img src="https://rickreen.net/assets/svg/google.svg" alt="" />
              </div>
              <div>
                <img
                  src="https://rickreen.net/assets/svg/facebook.svg"
                  alt=""
                />
              </div>
              <div>
                <img src="https://rickreen.net/assets/svg/apple.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="secong-grid-item">
            <div>
              <img
                width="100%"
                src="https://rickreen.net/assets/svg/unlock.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
