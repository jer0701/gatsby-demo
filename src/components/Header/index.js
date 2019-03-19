import React, { Component } from "react";
import xhr from "xhr";
import "./styles.css";

// const headers = new Headers({
//   "Accept": "application/json",
//   "Content-Type": "application/json"
// });


class Footer extends Component {
  componentDidMount() {
    // xhr({
    //     method: "get",
    //     uri: "https://coding.net/api/current_user",
    //     withCredentials: true,
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }, function (err, resp, body) {
    //     console.log(resp);
    // })
    // fetch("https://coding.net/api/current_user", {
    //   method: "GET",
    //   headers: headers,
    //   credentials: 'include'
    // }).then(response => {
    //     console.log(response);
    // })
  }
  render() {
    return (
      <header className="header">
        header
      </header>
    );
  }
}

export default Footer;
