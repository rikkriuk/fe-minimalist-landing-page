import React from "react";
import HeroContainer from "../containers/HeroContainer";
import AboutUsComponent from "../components/AboutUsComponent";
import TeamsContainer from "../containers/TeamsContainer";
import StatisticsComponent from "../components/StatisticsComponent";
import TrustedContainer from "../containers/TrustedContainer";
import BannerComponent from "../components/BannerComponent";

const AboutUsPage = () => {
  return (
    <main>
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