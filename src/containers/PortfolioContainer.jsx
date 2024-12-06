import React, { useEffect } from "react";
import PortfolioComponent from "../components/PortfolioComponent";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolio } from "../redux/slices/portfolioSlice";

const portfolio = {
   home: {
      type: "home",
      title: "Our Work So Far",
      navbar: ["ALL", "BRANDING", "ILLUSTRATION", "PRODUCT DESGIN"],
   },
   ourWork: {
      type: "feature",
      title: "Featured Work",
      navbar: "We are an award-winning creative & design agency committed to excellence since forever.",
   }
}

const PorfolioContainer = ({ page }) => {
   const { portfolios } = useSelector((state) => state.portfolio);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getPortfolio());
   }, [])

   portfolio[page].images = portfolios;

   return (
      <PortfolioComponent portfolio={portfolio[page]} />
   )  
}

PorfolioContainer.propTypes = {
   page: PropTypes.string.isRequired,
}

export default PorfolioContainer;