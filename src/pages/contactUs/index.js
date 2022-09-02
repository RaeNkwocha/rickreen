import React from "react";
import Navigation from "../../components/Nav/Navigation";
import Footer from "../../components/footer/Footer";
import Body from "./Body";

const ContactUs = () => {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <section style={{marginTop:"100px"}}>
        {" "}
        <Body />
      </section>
      <footer><Footer/></footer>
    </>
  );
};

export default ContactUs;
