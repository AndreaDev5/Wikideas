import React from "react";
import Header from "../components/Header";
import Ruleta from "../components/Ruleta";
import Information from "../components/Information";
import More from "../components/More";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Ruleta />
      <Information />
      <More />
      <Footer />
    </div>
  );
};

export default Home;
