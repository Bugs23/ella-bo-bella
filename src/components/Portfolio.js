import React from "react";

// IMAGE IMPORTS
import PortfolioPage from "../images/portfolio-full-1.png";
import FlickrImgSearch from "../images/flickr-img-search-full-1.png";
import JeepWrangler from "../images/jeep-wrangler-full-1.png";
import ZookMotorsHistory from "../images/zook-motors-history-full-1.png";
import DonHerringParts from "../images/don-herring-parts-full-1.png";
import BartiesvilleTireService from "../images/bartiesville-tire-service-full-1.png";
import BuyVsLease from "../images/buy-vs-lease-full-1.png";
import CommunityFirst from "../images/community-first-full-1.png";

// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

  	/****** Start PortfolioPage Popup ******/
  	const openPopupboxPortfolioPage = () => {
    	const content = (
      		<>
        		<img className="portfolio-image-popupbox" src={PortfolioPage} alt="PortfolioPage Clone Project..." />
        		<p>My portfolio site was built with react, CSS, HTML, and Bootstrap.</p>
        		<b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Bugs23/ella-bo-bella", "_blank")}>github.com/Bugs23/ella-bo-bella</a>
		        <br />
		        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Bugs23/ella-bo-bella", "_blank")}>github.com/Bugs23/ella-bo-bella</a>
      		</>
    	)
    	PopupboxManager.open({ content})
  	}

  	const popupboxConfigPortfolioPage = {
    	titleBar: {
      		enable: true,
      		text: "PortfolioPage clone project."
    	},
    	fadeIn: true,
    	fadeInSpeed: 500
  	}
	/****** End PortfolioPage Popup ******/

  	/****** Start FlickrImgSearch Popup ******/
  	const openPopupboxFlickrImgSearch = () => {
    	const content = (
      		<>
        		<img className="portfolio-image-popupbox" src={FlickrImgSearch} alt="FlickrImgSearch Clone Project..." />
        		<p>This application uses jQuery's Ajax capabilities to search for images on flickr tagged with the keyword specified by the user and display them on the page.</p>
        		<b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://bugs23.github.io/flickr-image-search/", "_blank")}>bugs23.github.io/flickr-image-search/</a>
		        <br />
		        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Bugs23/flickr-image-search", "_blank")}>github.com/Bugs23/flickr-image-search</a>
      		</>
    	)
    	PopupboxManager.open({ content})
  	}

  	const popupboxConfigFlickrImgSearch = {
    	titleBar: {
      		enable: true,
      		text: "Portfolio Site Project"
    	},
    	fadeIn: true,
    	fadeInSpeed: 500
  	}
	/****** End FlickrImgSearch Popup ******/

  	/****** Start JeepWrangler Popup ******/
  	const openPopupboxJeepWrangler = () => {
    	const content = (
      		<>
        		<img className="portfolio-image-popupbox" src={JeepWrangler} alt="JeepWrangler Clone Project..." />
        		<p>This page was custom built with HTML, CSS, Jquery, and Bootstrap.</p>
        		<b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://www.donnesterautocollection.com/2018-jeep-wrangler-jk.html", "_blank")}>donnesterautocollection.com/2018-jeep-wrangler-jk.html</a>
      		</>
    	)
    	PopupboxManager.open({ content})
  	}

  	const popupboxConfigJeepWrangler = {
    	titleBar: {
      		enable: true,
      		text: "JeepWrangler clone project."
    	},
    	fadeIn: true,
    	fadeInSpeed: 500
  	}
	/****** End JeepWrangler Popup ******/

  	/****** Start ZookMotorsHistory Popup ******/
  	const openPopupboxZookMotorsHistory = () => {
    	const content = (
      		<>
        		<img className="portfolio-image-popupbox" src={ZookMotorsHistory} alt="ZookMotorsHistory Clone Project..." />
        		<p>This page was custom built with HTML, CSS, Jquery, and Bootstrap.</p>
        		<b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://www.zookmotors.net/History.html")}>zookmotors.net/History.html</a>
      		</>
    	)
    	PopupboxManager.open({ content})
  	}

  	const popupboxConfigZookMotorsHistory = {
    	titleBar: {
      		enable: true,
      		text: "ZookMotorsHistory clone project."
    	},
    	fadeIn: true,
    	fadeInSpeed: 500
  	}
	/****** End ZookMotorsHistory Popup ******/

  	/****** Start DonHerringParts Popup ******/
  	const openPopupboxDonHerringParts = () => {
    	const content = (
      		<>
        		<img className="portfolio-image-popupbox" src={DonHerringParts} alt="Don Herring Dealership Parts Page" />
        		<p>This page was custom built with HTML, CSS, Jquery, and Bootstrap.</p>
        		<b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://www.donherring.com/parts-department.html")}>donherring.com/parts-department.html</a>
      		</>
    	)
    	PopupboxManager.open({ content})
  	}

  	const popupboxConfigDonHerringParts = {
    	titleBar: {
      		enable: true,
      		text: "DonHerringParts clone project."
    	},
    	fadeIn: true,
    	fadeInSpeed: 500
  	}
	/****** End DonHerringParts Popup ******/

  	/****** Start City Guide App Popup ******/
  	const openPopupboxBartiesvilleTireService = () => {
    	const content = (
      		<>
		        <img className="portfolio-image-popupbox" src={BartiesvilleTireService} alt="City Guide App Project..." />
		        <p>This page was custom built with HTML, CSS, Jquery, and Bootstrap.</p>
      		</>
    	)
    	PopupboxManager.open({ content})
  	}

  	const popupboxConfigBartiesvilleTireService = {
    	titleBar: {
      		enable: true,
      		text: "City Guide App project."
    	},
	    fadeIn: true,
	    fadeInSpeed: 500
  	}
  	/****** End City Guide App Popup ******/

  	/****** Start Portfolio Project Popup ******/
  	const openPopupboxBuyVsLease = () => {
    	const content = (
      		<>
		        <img className="portfolio-image-popupbox" src={BuyVsLease} alt="Portfolio Project..." />
		        <p>This page was custom built with HTML, CSS, Jquery, and Bootstrap.</p>
      		</>
    	)
    	PopupboxManager.open({ content})
  	}

  	const popupboxConfigBuyVsLease = {
    	titleBar: {
      		enable: true,
      		text: "Poftfolio React and Material UI project."
    	},
	    fadeIn: true,
	    fadeInSpeed: 500
	}
	/****** End Portfolio Project Popup ******/

	/****** Start Task Manager React and Redux Project Popup ******/
	const openPopupboxCommunityFirst = () => {
    	const content = (
      		<>
			    <img className="portfolio-image-popupbox" src={CommunityFirst} alt="Task Manager React and Redux Project..." />
			    <p>This page was custom built with HTML, CSS, Jquery, and Bootstrap.</p>
			    <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://www.dahlmazda.com/community-first.html", "_blank")}>dahlmazda.com/community-first.html</a>
      		</>
    	)
    	PopupboxManager.open({ content})
  	}

  	const popupboxConfigCommunityFirst = {
    	titleBar: {
      		enable: true,
      		text: "Community First Page"
    	},
    	fadeIn: true,
    	fadeInSpeed: 500
  	}
  	/****** End Task Manager React and Redux Project Popup ******/

	return (
		<div id="portfolio" className="portfolio-wrapper">
			<div className="container">
				<h1 className="text-uppercase text-center py-5">Portfolio</h1>
				<div className="image-box-wrapper row row-cols-auto justify-content-center">
					<div className="portfolio-image-box" onClick={openPopupboxPortfolioPage}>
						<img className="portfolio-image" src={PortfolioPage} alt="Portfolio page image " />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>
					<div className="portfolio-image-box" onClick={openPopupboxFlickrImgSearch}>
						<img className="portfolio-image" src={FlickrImgSearch} alt="Flickr image search image " />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>
					<div className="portfolio-image-box" onClick={openPopupboxJeepWrangler}>
						<img className="portfolio-image" src={JeepWrangler} alt="Jeep Wrangler info page " />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>
					<div className="portfolio-image-box" onClick={openPopupboxZookMotorsHistory}>
						<img className="portfolio-image" src={ZookMotorsHistory} alt="Zook Motors History page image " />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>
					<div className="portfolio-image-box" onClick={openPopupboxDonHerringParts}>
						<img className="portfolio-image" src={DonHerringParts} alt="Don Herring Dealership parts page " />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>
					<div className="portfolio-image-box" onClick={openPopupboxBartiesvilleTireService}>
						<img className="portfolio-image" src={BartiesvilleTireService} alt="Bartiesville Tire Service page " />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>
					<div className="portfolio-image-box" onClick={openPopupboxBuyVsLease}>
						<img className="portfolio-image" src={BuyVsLease} alt="VW buy vs lease page " />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>
					<div className="portfolio-image-box" onClick={openPopupboxCommunityFirst}>
						<img className="portfolio-image" src={CommunityFirst} alt="Community first page " />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>
				</div>
			</div>
			<PopupboxContainer {...popupboxConfigPortfolioPage} />
			<PopupboxContainer {...popupboxConfigFlickrImgSearch} />
			<PopupboxContainer {...popupboxConfigJeepWrangler} />
			<PopupboxContainer {...popupboxConfigZookMotorsHistory} />
			<PopupboxContainer {...popupboxConfigDonHerringParts} />
			<PopupboxContainer {...popupboxConfigBartiesvilleTireService} />
			<PopupboxContainer {...popupboxConfigBuyVsLease} />
			<PopupboxContainer {...popupboxConfigCommunityFirst} />

		</div>
	)
}

export default Portfolio;