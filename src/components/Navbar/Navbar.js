import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";


function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    // <div className="navbar mt-4">
    <header className="sticky-top">
      {/* <h3>LOGO</h3> */}
    
      <nav ref={navRef}>
        <a href="/#" onClick={showNavbar}>
          Home
        </a>
        <a href="/#services" onClick={showNavbar}>
          Services
        </a>
        <a href="/#gallery" onClick={showNavbar}>
          Gallery
        </a>
        
        <a href="/#about" onClick={showNavbar}>
          About Us
        </a>
        <a href="/#contact-us" onClick={showNavbar}>
          Contact Us{" "}
        </a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
    // </div>
  );
}

export default Navbar;
