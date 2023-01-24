import React from 'react';
import './App.css';
import AboutUs from './components/Home/AboutUs';
import Home from './components/Home/Home';
import Nav from './components/Navbar/Nav';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
   <React.Fragment>
   <Nav/>
    <Navbar/>
    < Home/>
    <AboutUs/>
   </React.Fragment>
  );
}

export default App;
