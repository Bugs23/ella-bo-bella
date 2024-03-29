import React from "react"

export default function PortfolioCard(props) {


	return (
		<>
			<div className="col-lg-6 col-md-6">
				<div className="text-end">
					<div className="portfolio-project-image pb-3">
						<img alt={props.title} className="img-fluid" src={props.projectImg} />
						<img alt={props.title} className="img-fluid" src={props.projectImg} />
						<img alt={props.title} className="img-fluid" data-tilt="true" data-tilt-max="3" data-tilt-perspective="500" data-tilt-speed="400" src={props.projectImg} />
					</div>
				</div>
			</div>
			<div className="col-lg-6 col-md-6">
				<div className="portfolio-project-text pb-5 center-text">
					<div className="format">
						<div className="format-small-text">
						    {props.tools.map((icon) => 
						    	<span className="me-2">
						    		<i className={`${icon} portfolio-icon`}></i>
						    	</span>
						    )}
						</div>
						<div className="format-head-text">
							<h3 className="about-font-header text-white">{props.title}</h3>
						</div>
						<div className="format-sub-text">
							<p className="about-para">{props.description}</p>
						</div>
						<div className="portfolio-btn-container">
							<a href={props.repoUrl} rel="noreferrer" target="_blank"  className="btn-main portfolio-btn">Source Code</a>
							<a href={props.demoUrl} rel="noreferrer" target="_blank"  className="btn-secondary portfolio-btn">Website</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}