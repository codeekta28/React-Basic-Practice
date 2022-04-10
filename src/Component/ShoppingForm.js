import React, { Component } from "react";

export class ShoppingForm extends Component {
    constructor(props){
        super(props);
        this.state={
            itemName:"",
            itemQty:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value,
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const{itemName,itemQty}=this.state
        console.log("shopping",itemName,itemQty);
        this.props.addItem(this.state)
        this.setState({
            itemName:"",
            itemQty:"",
        })
    }
  render() {
    return (
      <div className="ShoppingForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            name="itemName"
            value={this.state.itemName}
            onChange={this.handleChange}
          />
          <label htmlFor="itemQty">Item Qty:</label>
          <input
            type="number"
            min={1}
            max={10}
            name="itemQty"
            value={this.state.itemQty}
            onChange={this.handleChange}
          />
          <button>Add!</button>
        </form>
      </div>
    );
  }
}

export default ShoppingForm;
