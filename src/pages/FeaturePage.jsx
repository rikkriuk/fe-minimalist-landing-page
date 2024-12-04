import React from "react";
import HeroContainer from "../containers/HeroContainer";
import PorfolioContainer from "../containers/PortfolioContainer";
import TrustedContainer from "../containers/TrustedContainer";
import BannerComponent from "../components/BannerComponent";

const FeaturePage = () => {
   return (
      <main>
         <HeroContainer page={"feature"} />
         <PorfolioContainer page={"feature"} />
         <TrustedContainer page={"feature"} />
         <BannerComponent />
      </main>
   )
}

export default FeaturePage;