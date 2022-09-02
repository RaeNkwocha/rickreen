import React from "react";
import "../css/styles.css";

const Header = () => {
  return (
    <>
      <div style={{ marginTop: "50px" }} className="about-header"></div>;
      <div>
        <h2 style={{ textAlign: "center" }}>About Us</h2>
      </div>
      <div className="about-us-text">
        <p>
          Food Delivery, Taxi Services and Logistics don’t come all in one
          place. So Rickreen Integrated services (RISE) is at your doorstep to
          present 3 in 1 App services for your necessities at your desired
          place. After traveling a long journey in building our services for
          users' feasibility, we have come with RICKREEN Application with a
          fully customized system from booking to final delivery. <br /> <br />{" "}
          We are located at 19, Timothy Lane Rumuola, Port Harcourt, Rivers
          State, of Nigeria. And with every new step towards the implementation
          of our services; we are spreading over the other cities, states, and
          countries of Africa. We have successfully served over 500+ users,
          clients, and businessmen. <br /> <br /> Our mission is to deliver a
          positive, constant, and trustworthy service to each and every user and
          come up with astonishing offers in the future to maintain a healthy
          relationship with our customers
        </p>
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Our Featured Services</h2>
        <div className="featured-services-grid">
          <div className="about-us-card">
            <h3>Food Delivery Services</h3>
            <div>
              <ul>
                <li>
                  Enjoy food from your favorite kitchen, restaurant, and Café at
                  the home, office, college, or any of your busy or neutral
                  places through one click
                </li>
                <li>
                  Enjoy food from your favorite kitchen, restaurant, and Café at
                  the home, office, college, or any of your busy or neutral
                  places through one click
                </li>
              </ul>
            </div>
          </div>
          <div className="about-us-card">
            <h3>Taxi or Carpooling Services</h3>
            <div>
              <ul>
                <li>
                  Through our App, we are perfectly handling the pricing,
                  destination distance, and time travel of a passenger which
                  gives transparency in the fare.{" "}
                </li>
                <li>
                  No hidden cost, we have the most effective and cost-cutting
                  model for our passengers as well as partners.
                </li>
                <li>
                  We also keep a live track for safety purposes, whether it's
                  passenger safety, transaction transparency, business
                  liquidity, or employee/driver benefits.
                </li>
                <li>
                  So enjoy your easy pick & drop, sanitized cab, long-distance
                  travel with effortless pickup services.
                </li>
              </ul>
            </div>
          </div>
          <div className="about-us-card">
            <h3>Logistic Services</h3>
            <div>
              <ul>
                <li>
                  By keeping a watch over our client’s crucial time, we are at
                  your service for all your logistics needs, including haulage.
                </li>
                <li>We have a widespread network to cater for our growth.</li>
                <li>
                  Through the use of the RICKREEN Application; Users can sit at
                  their favorite place, use the app, make orders, and fasten
                  your eye view to enjoy real-time tracking of your lined up
                  shipment/orders.
                </li>
                <li>
                  With a variety of vehicles such as tail-lifts, curtain-sided,
                  flats, low bed, box trailers, and trucks we are available
                  full-fledged to provide high-quality Haulage services
                  throughout Nigeria and expanding to each corner of Africa.
                </li>
                <li>
                  We are into tie-up with Pallet Networks and partner with
                  various Haulage companies which allow us to serve best and
                  domestic rates for all operations. Enjoy the best services as
                  palletized shipping, full & part loads, air, road & sea, and
                  same-day delivery.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{display:"grid",placeItems:"center"}}>
          {" "}
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Header;
