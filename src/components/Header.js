import React from "react";
import Typed from "react-typed";

const Header = () => {
	return (
		<div className="header-wrapper">
			<div className="main-info">
				<h1>Web Development & Design</h1>

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
				// eslint-disable-next-line
				<a href="#" className="btn-main-offer">Contact Me</a>
			</div>
		</div>
	)
};

export default Header;