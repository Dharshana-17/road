import React from 'react';
import './App.css';
import AboutUs from './components/Home/AboutUs';
import Home from './components/Home/Home';
import OurTeam from './components/Home/OurTeam';
import Nav from './components/Navbar/Nav';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
   <React.Fragment>
    <OurTeam/>
   {/* <Nav/> */}
    <Navbar/>
    < Home/>
    <AboutUs/>
   </React.Fragment>
  );
}

export default App;
