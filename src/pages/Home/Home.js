import React from "react";
import App from "../../components/app/App";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Nav/Navigation";
import Services from "../../components/services/Services";

const Home = ({ setToken }) => {
  return (
    <>
      <nav>
        <Navigation setToken={setToken} />
      </nav>
      <header>
        <Header />
      </header>
      <section>
        <Services />
      </section>
      <section>
        <App />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
