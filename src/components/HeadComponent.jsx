import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import WebLogo from "../../public/favicon.ico";

const HeadComponent = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href={WebLogo} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="My Blog" />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
  );
};

HeadComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default HeadComponent;
