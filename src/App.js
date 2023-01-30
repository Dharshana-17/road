import React from "react";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import AboutUs from "./components/Home/AboutUs";
import ContactUs from "./components/Home/ContactUs";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import OurTeam from "./components/Home/OurTeam";
import Nav from "./components/Navbar/Nav";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <Nav/>
      <Navbar />
      <Home />
      {/* <Gallery /> */}
      <AboutUs />
      <OurTeam />
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
}

export default App;
