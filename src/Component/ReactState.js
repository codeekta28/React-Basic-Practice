import React, { Component } from "react";

export class ReactState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      num1: 0,
    };
    // here this of makeTimer refers to class
    this.makeTimer();
    this.handleClick=this.handleClick.bind(this)
  }
  // we are calling it in constructor bcoz it is the first thing to render in react component
  makeTimer() {
    //   console.log("makeTime",this);
    setInterval(() => {
      // we cant use the variable maxNum here bcox it run b4 render method and maxNum is not defined
      const rand = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ num: rand });
    }, 1000);
  }
  handleClick(){
      const rand=Math.floor(Math.random()*this.props.maxNum)
      this.setState({
          num1:rand
      })
  }
  render() {
    const { maxNum } = this.props;
    const { num, num1 } = this.state;
    return (
      <div className="reactState">
        <h3>
          This example shows react state changes without event or user
          interation with setinterval help
        </h3>
        <button style={{ width: "10%" }}>Random-{num}</button>
        <h1>***************************************</h1>
        <h3>This example shows react state changes with  clickevent so click it and see changes in value</h3>
        <button style={{ width: "10%" }} onClick={this.handleClick}>Rand-{num1}</button>
      </div>
    );
  }
}

export default ReactState;
