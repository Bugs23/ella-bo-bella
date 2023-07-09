import React from "react";
import logo from "../ru-logo.png";
import {Link} from "react-scroll";

// REACT FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
			<div className="container">
				<Link smooth={true}  duration={0} to="home" className="navbar-brand" href="#">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    				{/* React fontawesome hamburger icon */}
    				<FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto text-uppercase">
						<li className="nav-item active">
							<Link smooth={true} to="home" duration={0} offset={-110} className="nav-link">Home</Link>
						</li>
                        <li className="nav-item">
                            <Link smooth={true} to="skills" duration={0} offset={-60} className="nav-link">Skills</Link>
                        </li>
						<li className="nav-item">
							<Link smooth={true} to="portfolio" duration={0} offset={-60} className="nav-link">Portfolio</Link>
						</li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" duration={0} offset={-60} className="nav-link">Experience</Link>
                        </li>
						<li className="nav-item">
							<Link smooth={true} duration={0} to="about" className="nav-link">About Me</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		
	)
}