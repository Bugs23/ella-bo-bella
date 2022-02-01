import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import WOW from "wow.js";

const Services = () => {

  	const componentDidMount = () => {
    	const wow = WOW();
    	wow.init();
  	}

	return (
		<div id="services" className="services section-wrapper">
			<h1 className="pb-5 text-uppercase wow slideInRight">My Services</h1>
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
							</div>
							<h3>Web Development & Design</h3>
							<p>I'm always interested in working with and learning new tools and some of the things I have experience with include:</p>
							<ul className="skill-items">
							  	<li>HTML</li>
							  	<li>CSS</li>
							  	<li>JavaScript</li>
							  	<li>React</li>
							  	<li>Bootstrap</li>
							</ul>  
						</div>
					</div>
					{/* - */}
					<div className="col-lg-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
							</div>
							<h3>Graphic Design</h3>
							<p>I love helping clients bring new design ideas to life. Some of the design tools I have experience with include:</p>
							<ul className="skill-items">
								<li>Photoshop</li>
								<li>Illustrator</li>
								<li>InDesign</li>
								<li>Sketch</li>
								<li>Invision</li>
							</ul>  
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services;