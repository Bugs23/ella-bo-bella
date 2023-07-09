import React from "react";
import PortfolioCard from "./PortfolioCard";
import portfolioData from "../portfolio-data"

export default function Portfolio() {
    const cards = portfolioData.map((card) => {
        return (
            <PortfolioCard 
                key={card.id}
                {...card}
            />
        )
    })

    console.log(cards)

	return (
		<div id="portfolio" className="portfolio portfolio-wrapper section-wrapper">
			<div className="container">
				<h1 className="text-uppercase text-center pb-5">Portfolio</h1>
				<div className="row portfolio-row-flex">				
                    {cards}
				</div>
			</div>
		</div>
	)
}