import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../../config/SiteConfig";

class SEO extends Component {
  render() {
    return (
      <Helmet>
        {/* OpenGraph tags */}
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:type" content={config.siteType} />
        <meta property="og:title" content={config.siteTitleAlt} />
        <meta property="og:description" content={config.siteDescription} />
        <meta property="og:image" content={config.siteLogo} />
      </Helmet>
    );
  }
}

export default SEO;
