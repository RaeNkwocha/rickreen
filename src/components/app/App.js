import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  return (
    <>
      <div
        style={{
          background: "#FEEECE",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        <Container>
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Col sm>
              <div>
                <img
                  width="100%"
                  src="https://rickreen.net/assets/png/app-screen.png"
                />
              </div>
            </Col>
            <Col sm style={{ marginTop: "50px" }}>
              <div>
                <h3 style={{ color: "gold" }}>Install the app</h3>
              </div>
              <div style={{ marginTop: "20px" }}>
                <p>
                  It's never been easier to order <strong>food</strong> and
                  <strong> rides</strong>. Look for the finest discounts and
                  you'll be lost in a world of delectable food.
                </p>
              </div>
              <div>
                <img src="https://rickreen.net/assets/png/appstore-download-button.png" />
              </div>
            </Col>{" "}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
