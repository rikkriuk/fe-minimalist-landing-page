import React from "react";
import IntroductionComponent from "../components/IntroductionComponent";
import PorfolioContainer from "../containers/PortfolioContainer";
import ThreeStepComponet from "../components/ThreeStepComponent";
import TestimonialComponent from "../components/TestimonialComponent";
import BannerComponent from "../components/BannerComponent";
import ArticleContainer from "../containers/ArticleContainer";
import HeadComponent from "../components/HeadComponent";
import HeroContainer from "../containers/HeroContainer";
import TrustedContainer from "../containers/TrustedContainer";

const HomePage = () => {
   return (
      <main>
         <HeadComponent
            title="Home - dsgnr."
            description="dsgnr. is a design agency that helps startups and businesses to build great digital products."
            keywords="dsgnr., design agency, design, agency, startup, business, digital product, product"
         />
         <HeroContainer page="home" />
         <IntroductionComponent />
         <PorfolioContainer page="home" />
         <ThreeStepComponet />
         <TestimonialComponent />
         <TrustedContainer page="home" />
         <ArticleContainer page="home" />
         <BannerComponent />
      </main>
   )
}

export default HomePage;