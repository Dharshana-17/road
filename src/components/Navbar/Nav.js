import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  const current = new Date();
  current.setDate(current.getDate());

  const date = current.toDateString();

  return (
    <header
      className=""
      style={{
        backgroundColor: "#fff",
        height: "30px",
        width: "100%",
      }}
    >
      <p className="row text-dark pt-4">{date}</p>
      {/* <p className="row text-dark pt-2">{date}</p> */}
     
    </header>
  );
}

export default Nav;
