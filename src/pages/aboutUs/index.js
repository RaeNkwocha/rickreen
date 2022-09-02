import React from "react";
import Navigation from "../../components/Nav/Navigation";
import Header from "./components/Header";
import Footer from "../../components/footer/Footer";


const AboutUs = () => {
  return (
    <>
      <nav>
        <Navigation />
        <header>
          <Header />
        </header>
        <footer><Footer/></footer>
      </nav>
    </>
  );
};

export default AboutUs;
