import React from "react";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import AboutUs from "./components/Home/AboutUs";
import ContactUs from "./components/Home/ContactUs";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import Nav from "./components/Navbar/Nav";
import Navbar from "./components/Navbar/Navbar";
import ExpenseCalculator from "./components/Expense/ExpenseCalculator";

function App() {
  return (
    <React.Fragment>
      <Nav/>
      <Navbar />
      <Home />
      <ExpenseCalculator/>
       <Gallery />
      <AboutUs />
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
}

export default App;
