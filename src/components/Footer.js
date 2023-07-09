import React from "react";

export default function Footer() {
    return (
        <div className="footer bg-dark">
            <div className="container">
                <div className="footer-icon-container align-center">
                    <div className="text-center footer-icon-tile p-2">
                        <a href="https://linkedin.com/in/raymondurrutia" target="_blank" rel="noreferrer">
                            <i className="devicon-linkedin-plain footer-icon"></i>
                        </a>
                    </div>
                    <div className="text-center footer-icon-tile p-2">
                        <a href="https://github.com/Bugs23" target="_blank" rel="noreferrer">
                            <i className="devicon-github-original footer-icon"></i>
                        </a>
                    </div>
                </div>
                <p className="pt-3 text-center">
                    <small className="muted">Copyright&copy;
                    { new Date().getFullYear() }
                    &nbsp;Raymond Urrutia | All Rights Reserved
                    </small>
                </p>
            </div>
        </div>
    )
}