import React from "react";
import Helmet from "react-helmet";
import ReactGA from "react-ga";
import SEO from "../components/SEO";
import config from "../../config/SiteConfig";
import "./index.css";

export default class MainLayout extends React.Component {
  componentDidMount() {
    // not use gatsby-plugin-google-analytics
    ReactGA.initialize([
      {
        trackingId: 'UA-65952334-7'
      },
      {
        trackingId: 'UA-65952334-1',
        gaOptions: { name: 'platform' }
    }], {allowLinker: true});
    var ga = ReactGA.ga();
    ga('require', 'linkid');
    ga('require', 'linker');
    ga('linker:autoLink', ['e.coding.net', 'coding.net', 'feie.work']);
    ga('platform.linker:autoLink', ['e.coding.net', 'coding.net', 'feie.work']);
    ga('send', 'pageview');
    ga('platform.send', 'pageview');
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="keywords" content={config.siteKeywords} />
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/x-icon" href={config.siteFavicon}/>
        </Helmet>
        <SEO />
        {children}
      </div>
    );
  }
}
