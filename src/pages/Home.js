import React from "react";
import App from "../components/app/App";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import Navigation from "../components/Nav/Navigation";
import Services from "../components/services/Services";

const Home = ({ setToken }) => {
  return (
    <>
      <nav>
        <Navigation setToken={setToken}></Navigation>
      </nav>
      <header>
        <Header></Header>
      </header>
      <section>
        <Services></Services>
      </section>
      <section>
        <App></App>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Home;
