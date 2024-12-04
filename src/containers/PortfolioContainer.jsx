import React from "react";
import PortfolioComponent from "../components/PortfolioComponent";
import PortfolioImg1 from "../assets/portfolio-1.png";
import PortfolioImg2 from "../assets/portfolio-2.png";
import PortfolioImg3 from "../assets/portfolio-3.png";
import PortfolioImg4 from "../assets/portfolio-4.png";
import PortfolioImg5 from "../assets/portfolio-5.png";
import PortfolioImg6 from "../assets/portfolio-6.png";
import PortfolioImg7 from "../assets/portfolio-7.png";
import PropTypes from "prop-types";

const portfolio = {
   home: {
      type: "home",
      title: "Our Work So Far",
      navbar: ["ALL", "BRANDING", "ILLUSTRATION", "PRODUCT DESGIN"],
      images: [
         PortfolioImg1,
         PortfolioImg2,
         PortfolioImg3,
         PortfolioImg4,
         PortfolioImg5,
         PortfolioImg6,
         PortfolioImg7,
      ]
   },
   feature: {
      type: "feature",
      title: "Featured Work",
      navbar: "We are an award-winning creative & design agency committed to excellence since forever.",
      images: [
         PortfolioImg1,
         PortfolioImg3,
         PortfolioImg4,
         PortfolioImg5,
         PortfolioImg6,
         PortfolioImg7,
      ]
   }
}

const PorfolioContainer = ({ page }) => {
   return (
      <PortfolioComponent portfolio={portfolio[page]} />
   )  
}

PorfolioContainer.propTypes = {
   page: PropTypes.string.isRequired,
}

export default PorfolioContainer;