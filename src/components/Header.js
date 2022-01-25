import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

const Header = () => {
	return (
		<div id="home" className="header-wrapper">
			<div className="main-info">
				<h1>Raymond Urrutia</h1>
				<h3>Web Development & Design</h3>

			{/* - "strings" is the array with the text you want to see typed 
				- typeSpeed is the speed you want the text typed out
				- backSpeed is the speed you want the text typed back
			*/}
				<Typed 
					className="typed-text"
					strings={["Web Development", "Web Design", "UX Design", "Graphic Design"]}
					typeSpeed={50}
					backSpeed={60}
					loop
				/>
				<Link smooth={true} to="contact" offset={-110} className="btn-main-offer" href="#">Contact Me</Link>
				
			</div>
		</div>
	)
};

export default Header;