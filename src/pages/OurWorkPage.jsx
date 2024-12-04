import React from "react";
import HeroContainer from "../containers/HeroContainer";
import PorfolioContainer from "../containers/PortfolioContainer";
import TrustedContainer from "../containers/TrustedContainer";
import BannerComponent from "../components/BannerComponent";
import HeadComponent from "../components/HeadComponent";

const OurWorkPage = () => {
   return (
      <main>
         <HeadComponent
            title="Our Work - dsgnr."
            description="dsgnr. works with startups and businesses to build great digital products."
            keywords="dsgnr., our work, design agency, design, agency, startup, business, digital product, product"
         />
         <HeroContainer page={"ourWork"} />
         <PorfolioContainer page={"feature"} />
         <TrustedContainer page={"feature"} />
         <BannerComponent />
      </main>
   )
}

export default OurWorkPage;