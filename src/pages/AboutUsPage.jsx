import React from "react";
import HeroContainer from "../containers/HeroContainer";
import AboutUsComponent from "../components/AboutUsComponent";
import TeamsContainer from "../containers/TeamsContainer";
import StatisticsComponent from "../components/StatisticsComponent";
import TrustedContainer from "../containers/TrustedContainer";
import BannerComponent from "../components/BannerComponent";
import HeadComponent from "../components/HeadComponent";

const AboutUsPage = () => {
  return (
    <main>
      <HeadComponent
          title="About Us - dsgnr."
          description="dsgnr. about us page."
          keywords="dsgnr., about, about us, design, agency, startup, business, digital product, product"
      />
      <HeroContainer page="aboutUs" />
      <AboutUsComponent />
      <TeamsContainer />
      <StatisticsComponent />
      <TrustedContainer page="aboutUs" />
      <BannerComponent />
    </main>
  )
}

export default AboutUsPage;