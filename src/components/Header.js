import React from "react";
import Typed from "react-typed";
import { FaLaptopCode } from "react-icons/fa";

export default function Header() {

	return (
		<div id="home" className="header-wrapper">
			<div className="main-info text-uppercase wow bounceIn">
				<FaLaptopCode className="header-icon" />
				<h1>Raymond Urrutia</h1>
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
			</div>
		</div>
	)
}