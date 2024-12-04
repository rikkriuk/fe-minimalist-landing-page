import React from "react";
import HeroContainer from "../containers/HeroContainer";
import FormContainer from "../containers/FormContainer";
import OfficeContainer from "../containers/OfficeContainer";
import BannerComponent from "../components/BannerComponent";
import TrustedContainer from "../containers/TrustedContainer";

const ContactUsPage = () => {
   return (
      <main>
         <HeroContainer page="contactUs" />
         <FormContainer />
         <OfficeContainer />
         <BannerComponent />
         <TrustedContainer page="contactUs" />
      </main>
   )
}

export default ContactUsPage;