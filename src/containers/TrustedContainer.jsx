import React from "react";
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
import PropTypes from "prop-types";

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

const  TrustedContainer = ({ page }) => {
   return (
      <TrustedComponent logos={trustedCompanyLogo} page={page} />
   )
}

TrustedContainer.propTypes = {
   page: PropTypes.string.isRequired,
}

export default TrustedContainer;