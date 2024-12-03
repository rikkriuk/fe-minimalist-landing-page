import React from "react";
import HeroComponent from "../components/HeroComponent";
import IntroductionComponent from "../components/IntroductionComponent";
import PorfolioContainer from "../containers/PortfolioContainer";
import ThreeStepComponet from "../components/ThreeStepComponent";
import TestimonialComponent from "../components/TestimonialComponent";
import TrustedComponent from "../components/TrustedComponent";
import BannerComponent from "../components/BannerComponent";
import ArticleContainer from "../containers/ArticleContainer";
import HeadComponent from "../components/HeadComponent";

const HomePage = () => {
   return (
      <main>
         <HeadComponent
            title="Home - dsgnr."
            description="dsgnr. is a design agency that helps startups and businesses to build great digital products."
            keywords="dsgnr., design agency, design, agency, startup, business, digital product, product"
         />
         <HeroComponent />
         <IntroductionComponent />
         <PorfolioContainer />
         <ThreeStepComponet />
         <TestimonialComponent />
         <TrustedComponent />
         <ArticleContainer />
         <BannerComponent />
      </main>
   )
}

export default HomePage;