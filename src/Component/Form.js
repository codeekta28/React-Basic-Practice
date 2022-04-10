import React, { Component } from "react";

export class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:"",
            lastName:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
           [e.target.name]:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        console.log("form Submitted",this.state.firstName ,this.state.lastName);
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">FirstName:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <label htmlFor="lastName">LastName:</label>
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        <button>Add!</button>
      </form>
    );
  }
}

export default Form;
