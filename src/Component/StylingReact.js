import React, { Component } from "react";
// this component is created to understand styling the react

export class StylingReact extends Component {
  render() {
    const { favColor, otherColor } = this.props;
    const colors = {
      color: favColor,
      backgroundColor: otherColor,
      textTransform: "upperCase",
      border: "2px solid blue",
      wordSpacing: "1em",
    };
    return (
      <div className="stylingReact">
        <b style={colors}>
          We are learing styling of react and this styline is created using
          inline object
        </b>
        <p style={{color:"white",backgroundColor:"black",letterSpacing:"3px", width:"60%"}}>
          We are learing styling of react and this styline is created using
          inline css
        </p>
      </div>
    );
  }
}

export default StylingReact;
