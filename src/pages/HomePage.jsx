import React from "react";
import HeroComponent from "../components/HeroComponent";
import IntroductionComponent from "../components/IntroductionComponent";
import PorfolioContainer from "../containers/PortfolioContainer";
import ThreeStepComponet from "../components/ThreeStepComponent";
import TestimonialComponent from "../components/TestimonialComponent";
import TrustedComponent from "../components/TrustedComponent";
import ArticleComponent from "../components/ArticleComponent";
import BannerComponent from "../components/BannerComponent";

const HomePage = () => {
   return (
      <main>
         <HeroComponent />
         <IntroductionComponent />
         <PorfolioContainer />
         <ThreeStepComponet />
         <TestimonialComponent />
         <TrustedComponent />
         <ArticleComponent />
         <BannerComponent />
      </main>
   )
}

export default HomePage;