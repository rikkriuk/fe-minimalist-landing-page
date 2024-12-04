import React from "react"
import HandImg from "../assets/hand.png";
import HeroComponent from "../components/HeroComponent";
import ManyHandImg from "../assets/many-hand.png";
import ThreeHandImg from "../assets/three-hand-hero.png"
import PropTypes from "prop-types";

const pageTypes = {
   home: {
      type: "home",
      title: "Let’s create something great together.",
      actionType: "button",
      handImg: HandImg
   },
   ourWork: {
      type: "ourWork",
      title: "The work we do, and the people we help.",
      actionType: "mouse",
      handImg: ManyHandImg
   },
   ourWorkDetail: {
      type: "ourWorkDetail",
      title: "We work with love.",
      actionType: "mouse",
      handImg: ThreeHandImg
   },
   aboutUs: {
      type: "aboutUs",
      title: "We specialize in problem solving.",
      actionType: "mouse",
      handImg: ManyHandImg
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