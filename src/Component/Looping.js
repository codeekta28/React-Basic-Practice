import React, { Component } from "react";
// this component is created to understand looping in jsx

export class Looping extends Component {
  render() {
    const { hobbies, name } = this.props;
    const hobbyList=hobbies.map(hobby=><li>{hobby}</li>)

    return <div className="looping">{name} have following hobbies {hobbyList}</div>;
  }
}

export default Looping;
