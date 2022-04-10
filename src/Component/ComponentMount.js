import React, { Component } from "react";
import axios from "axios";
import styles from "./ComponentMount.module.css";

export class ComponentMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("Mounting");
    axios
      .get("https://api.github.com/zen")
      .then((response) => console.log("check", response));
  }
  render() {
    return (
      <div className="componentMount">
        {console.log("render")};{/* <div className={styles.loader}></div> */}
        Always Remember---{this.state.quote}
      </div>
    );
  }
}

export default ComponentMount;
