import axios from "axios";
import React, { Component } from "react";
import styles from "./AsyncComponentMount.module.css";

export class AsyncComponentMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      img: "",
      id: "",
      isLoaded: false,
      counter:0,
    };
    console.log("constructor");
  }
  async componentDidMount() {
      console.log("mount");
    const url = `https://api.github.com/users/${this.props.userName}`;
    let response = await axios.get(url);
    // console.log("response", response.data);
    setTimeout(() => {
      this.setState({
        userName: response.data.name,
        img: response.data.avatar_url,
        id: response.data.id,
        isLoaded: true,
      });
    }, 3000);
    // document.title=`You clicked button ${this.state.counter} times`
  }
  componentDidUpdate(){
      console.log("update");
      document.title=`You clicked button ${this.state.counter} times`
  }
  render() {
    return (
      <div className="async">
          {console.log("render")};
        {!this.state.isLoaded && <div className={styles.loader}></div>}
        {this.state.isLoaded && (
          <div className="detail">
            <h2>{this.state.userName}</h2>
            <p>
              <img src={this.state.img} alt="" />
            </p>
          </div>
        )}
        <p>You clicked button {this.state.counter} times</p>
        <button onClick={()=>this.setState({counter:this.state.counter+1})}>Click</button>
      </div>
    );
  }
}

export default AsyncComponentMount;
