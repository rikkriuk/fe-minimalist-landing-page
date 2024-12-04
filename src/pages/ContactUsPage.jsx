import React from "react";
import HeroContainer from "../containers/HeroContainer";
import FormContainer from "../containers/FormContainer";
import OfficeContainer from "../containers/OfficeContainer";
import BannerComponent from "../components/BannerComponent";
import TrustedContainer from "../containers/TrustedContainer";
import HeadComponent from "../components/HeadComponent";

const ContactUsPage = () => {
   return (
      <main>
         <HeadComponent
            title="Contact Us - dsgnr."
            description="dsgnr. contact us page."
            keywords="dsgnr., contact, contact us, design, agency, startup, business, digital product, product"
         />
         <HeroContainer page="contactUs" />
         <FormContainer />
         <OfficeContainer />
         <BannerComponent />
         <TrustedContainer page="contactUs" />
      </main>
   )
}

export default ContactUsPage;