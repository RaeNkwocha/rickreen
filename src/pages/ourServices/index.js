import React from "react";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/Nav/Navigation";
import Header from "./components/Header";
import Services from "./components/Services";

const OurServices = () => {
  return (
    <div>
      <Navigation />
      <header
        style={{ marginTop: "50px", background: "#0D6EFD", padding: "100px" }}
      >
        <Header />
      </header>
      <section>
        <Services />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default OurServices;
