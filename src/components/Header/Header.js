import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "../Header/css/header.css";

const Header = () => {
  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <div className="hero-bg-one">
              <div className="hero-text">
                {" "}
                <div>
                  {" "}
                  <h2>
                    A trusted provider of <br /> <span>Rides Share.</span>
                  </h2>
                </div>{" "}
                <div>
                  <p>
                    We deliver your products safely to your home <br /> in a
                    reasonable time.
                  </p>
                </div>
                <div>
                  <Button>Get Started</Button>
                </div>
              </div>
            </div>
            <div className="mobile-hero">
              <div className="mobile-hero-heading">
                {" "}
                <h2>
                  A trusted provider of <br /> <span>Rides Share.</span>
                </h2>
              </div>
              <div>
                <img
                  width="100%"
                  src="https://rickreen.net/assets/background/taxi.png"
                />
              </div>
              <div className="mobile-hero-para">
                <p>
                  We deliver your products safely to your home <br /> in a
                  reasonable time.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            {" "}
            <div className="hero-bg-two">
              <div className="hero-text">
                {" "}
                <div>
                  {" "}
                  <h2>
                    A trusted provider of <br /> <span>Rides Share.</span>
                  </h2>
                </div>{" "}
                <div>
                  <p>
                    We deliver your products safely to your home in a <br />{" "}
                    reasonable time.
                  </p>
                </div>
                <div>
                  <Button>Get Started</Button>
                </div>
              </div>
            </div>
            <div className="mobile-hero">
              <div className="mobile-hero-heading">
                {" "}
                <h2>
                  A trusted provider of <br /> <span>Rides Share.</span>
                </h2>
              </div>
              <div>
                <img
                  width="100%"
                  src="https://rickreen.net/assets/background/courier.png"
                />
              </div>
              <div className="mobile-hero-para">
                <p>
                  We deliver your products safely to your home <br /> in a
                  reasonable time.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            {" "}
            <div className="hero-bg-three">
              <div className="hero-text">
                {" "}
                <div>
                  {" "}
                  <h2>
                    A trusted provider of <br /> <span>Rides Share.</span>
                  </h2>
                </div>{" "}
                <div>
                  <p>
                    We deliver your products safely to your home <br />
                    in a reasonable time.
                  </p>
                </div>
                <div>
                  <Button>Get Started</Button>
                </div>
              </div>
            </div>
            <div className="mobile-hero">
              <div className="mobile-hero-heading">
                {" "}
                <h2>
                  A trusted provider of <br /> <span>Rides Share.</span>
                </h2>
              </div>
              <div>
                <img
                  width="100%"
                  src="https://rickreen.net/assets/background/food.png"
                />
              </div>
              <div className="mobile-hero-para">
                <p>
                  We deliver your products safely to your home <br /> in a
                  reasonable time.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Header;
