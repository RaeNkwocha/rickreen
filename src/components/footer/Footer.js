import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "../footer/css/footer.css";
const Footer = () => {
  return (
    <>
      <div style={{ background: "#222132" }}>
        <div className="footer-grid">
          <div>
            <div>
              {" "}
              <h3>Get an update every week</h3>
            </div>
            <div>
              <p>
                We ensure that your product is delivered in the safest possible
                manner, at the correct location, at the right time.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h4>SUBSCRIBE TO NEWSLETTER</h4>
            </div>
            <InputGroup
              style={{ gap: "0.2rem", marginTop: "1rem" }}
              className="mb-3"
            >
              <FormControl
                placeholder="Enter your Email "
                aria-label="Enter your Email "
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text
                style={{
                  color: "white",
                  border: "none",
                  background: "#0275d8",
                }}
                id="basic-addon2"
              >
                Subscribe
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>
        <div className="inner-footer-grid">
          <div className="inner-footer-grid-one">
            <div>
              <div style={{ marginBottom: "15px" }}>
                {" "}
                <img
                  height="60px"
                  src="https://rickreen.net/assets/png/logo.png"
                />
              </div>

              <div>
                <p>The most trusted Courier company in your area.</p>
              </div>
            </div>
            <div className="ul">
              <ul>
                <li style={{ color: "white" }}>Other Links</li>
                <li>SignUp As Partner</li>
                <li>SignUp As Restaurant</li>
                <li>SignUp As Driver</li>
              </ul>
            </div>
          </div>
          <div className="inner-footer-grid-one">
            <div>
              <div>
                <ul>
                  <li style={{ color: "white" }}>Services</li>
                  <li>Movers website</li>
                  <li>Artworks</li>
                  <li>Blogs</li>
                  <li>Corporate goods</li>
                </ul>
              </div>
            </div>
            <div>
              <ul>
                <li style={{ color: "white" }}>Customer Care</li>
                <li>About Us</li>
                <li>Contact US</li>
                <li>Traffic Update</li>
                <li>Documents</li>
                <li>Get Update</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="last-footer-grid">
          <div>
            <h5>All rights Reserved ©Rickreen, 2021</h5>
          </div>
          <div>
            <h5>Made by Obitsoft</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
