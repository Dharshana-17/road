import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import "./Navbar.css";
import { Link } from "react-router-dom";

function Nav() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div
      className="logo ms-5"
      style={{
        backgroundColor: "#FBAC45",
        position: "relative",
        float: "right",
      }}
    >
      <h2 className="text-white" style={{ color: "white" }}>
        Contact us
      </h2>
      <h2 className="text-white" style={{ color: "white" }}>
        Contact us
      </h2>
    </div>
  );
}

export default Nav;
