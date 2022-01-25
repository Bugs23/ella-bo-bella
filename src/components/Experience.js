import React from "react";

const Experience = () => {
	return (
		<div id="experience" className="experience">
			<div className="d-flex justify-content-center my-5">
				<h1>Experience</h1>
			</div>
			<div className="container experience-wrapper">
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2015 - 2017</h3>
						<p>Student Opportunity Center (SOC) - Front End Developer</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2016 - 2018</h3>
						<p>DealerOn - Web Designer</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2019 - Present</h3>
						<p>T-Mobile (formerly Sprint) - Web Designer ll</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Experience;