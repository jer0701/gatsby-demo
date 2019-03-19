import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import config from "../../config/SiteConfig";

class Index extends React.Component {
  
  render() {
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <Header />
        <div className="index-container">
          
          Coding.net
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default Index;
