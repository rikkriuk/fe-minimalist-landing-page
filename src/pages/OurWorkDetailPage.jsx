import React from "react";
import HeroContainer from "../containers/HeroContainer";
import PortfolioDetailComponent from "../components/PortfolioDetailComponent";
import BannerComponent from "../components/BannerComponent";
import HeadComponent from "../components/HeadComponent";

const OurWorkDetailPage = () => {
   return (
      <main>
         <HeadComponent
            title="Our Work Detail - dsgnr."
            description="dsgnr. our work detail page."
            keywords="dsgnr., our work, design agency, design, agency, startup, business, digital product, product"
         />
         <HeroContainer page="ourWorkDetail" />
         <PortfolioDetailComponent />
         <BannerComponent />
      </main>
   )
}

export default OurWorkDetailPage;