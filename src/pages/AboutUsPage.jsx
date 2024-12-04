import React from "react";
import HeroContainer from "../containers/HeroContainer";
import AboutUsComponent from "../components/AboutUsComponent";

const AboutUsPage = () => {
  return (
    <main>
      <HeroContainer page="aboutUs" />
      <AboutUsComponent />
    </main>
  )
}

export default AboutUsPage;