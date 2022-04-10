import React, { Component } from "react";
// i am creating this component to check conditions in jsx

export class Machine extends Component {
  render() {
    //   this is how variable created
    const { s1, s2, s3,playerName,age } = this.props;
    const winner = s1 === s2 && s2 === s3;
    const final=winner?"Won":"Loose"
    const votingRights=age>18?"Vote":"Cant Vote"
    
    return (
      <div className="ternary">
        {/* always make sure to do all calculation in render and return only result in return it is a best practice */}
        <h1>Slot Example</h1>
        <p>{playerName} {final}</p>
        <h1>voting example</h1>
        <p>{playerName}-<b>{votingRights}</b> </p>

      </div>
    );
  }
}

export default Machine;
