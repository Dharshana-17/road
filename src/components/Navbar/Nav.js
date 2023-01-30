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
      <div className="social-icons">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "blue",
            marginRight: "1rem",
          }}
        >
          <FaTwitter size="30px" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "maroon",
            marginRight: "1rem",
          }}
        >
          <FaInstagram size="30px" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "blue",
          }}
        >
          <FaFacebook size="30px" />
        </a>
      </div>
    </header>
  );
}

export default Nav;
