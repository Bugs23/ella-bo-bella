import React from "react";
import { RiMapPin2Fill } from "react-icons/ri";
import { BsHourglassTop } from "react-icons/bs";

export default function Experience() {
    return (
        <div id="experience" className="experience section-wrapper">
            <div className="d-flex justify-content-center pb-5">
                <h1 className="text-uppercase">Experience</h1>
            </div>
            <div className="container">
                <div className="col-md-8 mx-auto">
                    <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
                        <div className="vertical-timeline-element--work vertical-timeline-element">
                            <span className="vertical-timeline-element-icon rounded-circle rounded-circle">
                                <RiMapPin2Fill className="experience-icon" />
                            </span>
                            <div className="vertical-timeline-element-content rounded" >
                                <div className="badge-container">
                                    <span className="main-badge me-2 mb-2 badge badge-pill"><strong>Apr 2022 - Present</strong></span>
                                    <div className="vertical-timeline-element-content-arrow"></div>
                                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                    <h6 className="vertical-timeline-element-subtitle mt-1">Healhy Directions</h6>
                                    <div className="mt-2">
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">HTML</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">CSS</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">Tailwind</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">Adobe Illustrator</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">Adobe Photoshop</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">JobSuite</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vertical-timeline-element--work vertical-timeline-element">
                            <span className="vertical-timeline-element-icon rounded-circle rounded-circle">
                                <RiMapPin2Fill className="experience-icon" />
                            </span>
                            <div className="vertical-timeline-element-content rounded">
                                <div className="badge-container">
                                    <span className="main-badge me-2 mb-2 badge badge-pill"><strong>Jan 2019 - Apr 2022</strong></span>
                                    <div className="vertical-timeline-element-content-arrow"></div>
                                    <h3 className="vertical-timeline-element-title">Web Designer ll</h3>
                                    <h6 className="vertical-timeline-element-subtitle mt-1">T-Mobile</h6>
                                    <div className="mt-2">
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">HTML</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">CSS</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">Adobe Illustrator</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">Adobe Photoshop</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">Jira</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">Sketch</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">Invision</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vertical-timeline-element--work vertical-timeline-element">
                            <span className="vertical-timeline-element-icon rounded-circle rounded-circle">
                                <RiMapPin2Fill className="experience-icon" />
                            </span>
                            <div className="vertical-timeline-element-content rounded">
                                <div className="badge-container">
                                    <span className="main-badge me-2 mb-2 badge badge-pill"><strong>Nov 2016 - Dec 2018</strong></span>
                                    <div className="vertical-timeline-element-content-arrow"></div>
                                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                    <h6 className="vertical-timeline-element-subtitle mt-1">DealerOn</h6>
                                    <div className="mt-2">
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">HTML</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">CSS</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">Javascript</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">Jquery</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">Bootstrap</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">Jira</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">Adobe Illustrator</span>
                                        <span className="experience-badge me-2 mb-2 mt-1 badge badge-pill">Adobe Photoshop</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vertical-timeline-element vertical-timeline-element--no-children">
                            <span className="vertical-timeline-element-icon rounded-circle rounded-circle">
                                <BsHourglassTop className="experience-icon" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}