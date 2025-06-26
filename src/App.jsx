import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AOS from "aos";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import RnDTechnologies from "./components/RnDTechnologies";
import InnoBharatHub from "./components/InnoBharatHub";
import Portfolio from "./components/Portfolio";
import Investors from "./components/Investors";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <AboutUs />
      <Services />
      <RnDTechnologies />
      <InnoBharatHub />
      <Portfolio />
      <Investors />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
