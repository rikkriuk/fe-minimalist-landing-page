import React from "react"
import HandImg from "../assets/hand.png";
import HeroComponent from "../components/HeroComponent";
import ManyHand from "../assets/many-hand.png";
import PropTypes from "prop-types";

const pageTypes = {
   home: {
      type: "home",
      title: "Let’s create something great together.",
      actionType: "button",
      handImg: HandImg
   },
   feature: {
      type: "feature",
      title: "The work we do, and the people we help.",
      actionType: "mouse",
      handImg: ManyHand
   }
}

const HeroContainer = ({ page }) => {
   return (
      <HeroComponent hero={pageTypes[page]} />
   )
}

HeroContainer.propTypes = {
   page: PropTypes.string.isRequired
}

export default HeroContainer;