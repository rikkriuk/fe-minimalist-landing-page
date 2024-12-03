import React from "react";
import SpotifyLogo from "../assets/trusted company logo/spotify-light.svg";
import DropboxLogo from "../assets/trusted company logo/dropbox-light.svg";
import TeslaLogo from "../assets/trusted company logo/tesla-light.svg";
import RedditLogo from "../assets/trusted company logo/reddit-light.svg";

import GoogleLogo from "../assets/trusted company logo/google-light.svg";
import StripeLogo from "../assets/trusted company logo/stripe-light.svg";
import DhlLogo from "../assets/trusted company logo/dhl-light.svg";
import AirbnbLogo from "../assets/trusted company logo/airbnb-light.svg";

const trustedCompanyLogo = [
   SpotifyLogo,
   DropboxLogo,
   TeslaLogo,
   RedditLogo,
   GoogleLogo,
   StripeLogo,
   DhlLogo,
   AirbnbLogo,
];

const getBorderClasses = (index) => {
   const isFourth = index + 1 === 4;
   const isEighth = index + 1 === 8;
   const isSeventh = index + 1 === 7;
   const isEven = (index + 1) % 2 === 0;
   const isAfterFourthAndNotMultipleOfFour = (index + 1) > 4 && (index + 1) % 4 !== 0;
 
   return `
     border-b-2 md:border-r-2 xl:border-b-2 border-gray-300 p-16 flex justify-center items-center
     ${isFourth ? "xl:border-r-0" : ""}
     ${isEighth ? "md:border-b-0 xl:border-b-0 xl:border-r-0" : ""}
     ${isSeventh ? "xl:border-r-2 md:border-b-0 lg:border-b-0" : ""}
     ${isEven ? "md:border-r-0 lg:border-r-0 xl:border-r-2" : ""}
     ${isAfterFourthAndNotMultipleOfFour ? "xl:border-b-0" : ""}
   `;
 };


const TrustedComponent = () => {
   return (
         <section className="grid md:grid-cols-2 xl:grid-cols-4 lg:px-20 xl:px-52 py-40">
         {trustedCompanyLogo.map((svg, index) => (
            <div
               key={index}
               className={getBorderClasses(index)}
            >
               <img src={svg} alt="Company Logo" />
            </div>
         ))}
         </section>

   )
}

export default TrustedComponent;