import React from "react";
// Import picture
import author from "../ella-2.jpg"

const AboutMe = () => {
	return (
		<div id="about" className="container py-5 about-me">
			<div className="row">
				<div className="col-sm-6">
					<div className="photo-wrap mb-5">
						<img className="img-fluid profile-img" src={author} alt="author" />
					</div>
				</div>
				<div className="col-sm-6">
					<h1 className="about-heading">About Me</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>		
		</div>
	)
}

export default AboutMe;