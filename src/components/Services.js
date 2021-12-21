import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
	return (
		<div className="services">
			<h1 className="py-5">My Services</h1>
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
							</div>
							<h3>Web Development</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis id arcu quis cursus.</p>
						</div>
					</div>
					{/* - */}
					<div className="col-lg-4">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
							</div>
							<h3>Web Design</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis id arcu quis cursus.</p>
						</div>
					</div>
					{/* - */}
					<div className="col-lg-4">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faCoffee} size="2x" />
							</div>
							<h3>Graphic Design</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis id arcu quis cursus.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services;