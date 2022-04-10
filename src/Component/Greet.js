import React, { Component } from 'react';
// i am making this file to check how components are created and how value are transfered to components

export class Greet extends Component {
  render() {
    const{name,hobbies,biodata}=this.props

        
    return <div>
       <h2>{name} with age {biodata.age} lives in {biodata.city} having hobbies {hobbies} </h2>
    </div>;
  }
}

export default Greet;
