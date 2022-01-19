import React from "react";
import {
	LinkedinShareButton,
	LinkedinIcon
} from "react-share";

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="d-flex">
							<p>Falls Church, VA 22043</p>
						</div>
						<div className="d-flex">
							<a href="tel:703-498-1928">703-498-1928</a>
						</div>
						<div className="d-flex">
							<p>raymondurrutia2@yahoo.com</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-2 col-sm-6">
						<div className="row">
							<div className="col">
								<a href="" className="footer-nav">Home</a>
								<br/>
								<a href="" className="footer-nav">About Me</a>
								<br/>
								<a href="" className="footer-nav">Services</a>
							</div>
							<div className="col">
								<a href="" className="footer-nav">Experience</a>
								<br/>
								<a href="" className="footer-nav">Portfolio</a>
								<br/>
								<a href="" className="footer-nav">Contact</a>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
						<div className="flex justify-content-center">
							<LinkedinShareButton
								url={"https://www.linkedin.com/in/raymondurrutia/"}
							>
								<LinkedinIcon className="MX-3" size={36}></LinkedinIcon>
							</LinkedinShareButton>
						</div>
						<p className="pt-3 text-center">
							Copyright&copy;
							{new Date().getFullYear()}&nbsp;Raymond Urrutia | All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</div>	
	)
}

export default Footer;