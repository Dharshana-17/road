import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import "./Navbar.css";
import {Link} from "react-router-dom";

function Nav() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		// <div className="navbar mt-4">

			<div className="logo ms-5" style={{backgroundColor: "red", display: "flex", alignItems: "center",justifyContent: "space-between"}}>
				<h2 className="" >Contact us</h2>
			</div>


			// </div>
	);
}

export default Nav;
