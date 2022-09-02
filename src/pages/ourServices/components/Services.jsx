import React from "react";
import Card from "react-bootstrap/Card";
import ServicesComponent from "../../../components/services/Services";

const Services = () => {
  return (
    <div style={{margin:"30px",marginTop:"-60px"}}>
      <Card>
        <Card.Body><ServicesComponent/></Card.Body>
      </Card>
    </div>
  );
};

export default Services;
