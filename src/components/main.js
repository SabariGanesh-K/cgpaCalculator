import React, { Component } from "react";
import Header from "./header";
// import Input from "./inputBox";
// import Result from "./results";
import Footer from "./Footer";
import Calculator from "./input";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Calculator />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Main;
