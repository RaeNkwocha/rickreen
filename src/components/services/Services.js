import React from "react";
import authService from "../../services/Services";
import { useNavigate } from "react-router";
import "../services/css/services.css";
const Services = () => {
  const service = [
    {
      id: 1,
      img: "https://rickreen.net/assets/svg/taxi.svg",
      name: "Ride and Share",
      desc: "We give you complete reliable delivery for your company. We will take full responsibility of the deliveries.",
      cta: "GET STARTED",
    },
    {
      id: 2,
      img: "https://rickreen.net/assets/svg/courier.svg",
      name: "Courier Services",
      desc: "We give you complete reliable delivery for your company. We will take full responsibility of the deliveries.",
      cta: "GET STARTED",
    },
    {
      id: 3,
      img: "https://rickreen.net/assets/svg/food.svg",
      name: "Food Services",
      desc: "We give you complete reliable delivery for your company. We will take full responsibility of the deliveries.",
      cta: "GET STARTED",
    },
  ];
  let user = authService.user;
  const navigate = useNavigate()

  const handleStarted=()=>{
    if(user){
      navigate("/dashboard")
    } else{
      navigate("/login")

    }
  }
  return (
    <>
      <div className="text-center">
        {/* <div>
          <h4 style={{ color: "#5194FF" }}>Services</h4>
        </div> */}
        <div>
          <h4>Our Service For You</h4>
        </div>
      </div>
      <div>
        <div className="grid-container">
          {service.map((item) => (
            <div key={item.id} className="grid-box">
              {" "}
              <div style={{ display: "grid", placeItems: "center" }}>
                <img src={item.img} />
              </div>
              <div style={{ display: "grid", placeItems: "center" }}>
                <h5 style={{ textAlign: "center" }}>{item.name}</h5>
              </div>
              <div style={{ marginTop: "20px" }}>
                <p>{item.desc}</p>
              </div>
              <div className="cta-btn">
                <button onClick={handleStarted}>{item.cta}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
