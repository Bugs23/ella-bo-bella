import React from "react";
// Import picture
import author from "../assets/images/profile-pic.png"

export default function AboutMe() {
	return (
		<div id="about" className="about-me section-wrapper">
		    <div className="container">
				<div className="row">
					<div className="col-sm-6">
						<div className="photo-wrap mb-5">
							<img className="img-fluid profile-img" src={author} alt="author" />
						</div>
					</div>
					<div className="col-sm-6">
						<h1 className="about-heading text-uppercase">About Me</h1>
						<p>I’m a web developer and designer who always likes to learn new things. I’m self-efficient but collaborate well with others. I've been working in the field of web development for 10 years and I love seeking out opportunitioes that will not only challenge me but will also allow me to expand my skill set and further my career.</p>
					</div>
				</div>	
			</div>	
		</div>
	)
}