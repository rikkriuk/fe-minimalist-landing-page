import React from "react";
import PropTypes from "prop-types";
import TrustedComponent from "../components/TrustedComponent";

// Light Logo
import SpotifyLogo from "../assets/trusted company logo/spotify-light.svg";
import DropboxLogo from "../assets/trusted company logo/dropbox-light.svg";
import TeslaLogo from "../assets/trusted company logo/tesla-light.svg";
import RedditLogo from "../assets/trusted company logo/reddit-light.svg";
import GoogleLogo from "../assets/trusted company logo/google-light.svg";
import StripeLogo from "../assets/trusted company logo/stripe-light.svg";
import DhlLogo from "../assets/trusted company logo/dhl-light.svg";
import AirbnbLogo from "../assets/trusted company logo/airbnb-light.svg";

import SpotifyDarkLogo from "../assets/trusted company logo/spotify-dark.svg";
import DropboxDarkLogo from "../assets/trusted company logo/dropbox-dark.svg";
import TeslaDarkLogo from "../assets/trusted company logo/tesla-dark.svg";
import RedditDarkLogo from "../assets/trusted company logo/reddit-dark.svg";
import GoogleDarkLogo from "../assets/trusted company logo/google-dark.svg";
import StripeDarkLogo from "../assets/trusted company logo/stripe-dark.svg";
import DhlDarkLogo from "../assets/trusted company logo/dhl-dark.svg";
import AirbnbDarkLogo from "../assets/trusted company logo/airbnb-dark.svg";

const trustedCompanyLogo = {
   lightLogo: [
      SpotifyLogo,
      DropboxLogo,
      TeslaLogo,
      RedditLogo,
      GoogleLogo,
      StripeLogo,
      DhlLogo,
      AirbnbLogo,
   ],
   darkLogo: [
      SpotifyDarkLogo,
      DropboxDarkLogo,
      TeslaDarkLogo,
      RedditDarkLogo,
      GoogleDarkLogo,
      StripeDarkLogo,
      DhlDarkLogo,
      AirbnbDarkLogo, 
   ]
};

const TrustedContainer = ({ page }) => {
   const typeLogo = page === "home" ? "lightLogo" : "darkLogo";
   return (
      <TrustedComponent logos={trustedCompanyLogo[typeLogo]} page={page} />
   )
}

TrustedContainer.propTypes = {
   page: PropTypes.string.isRequired,
}

export default TrustedContainer;