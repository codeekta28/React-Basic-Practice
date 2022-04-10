import React, { Component } from "react";
import ShoppingForm from "./ShoppingForm";
import { v4 as uuidv4 } from "uuid";

export class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [
        { itemName: "bread", itemQty: 3, id: uuidv4() },
        {  itemName: "jam", itemQty: 1, id: uuidv4() },
      ],
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(items) {
    const newItem = { ...items, id: uuidv4() };
    this.setState((prevState) => {
      return {
        shoppingList: [...prevState.shoppingList, newItem],
      };
    });
  }
  showItem(){
      return(
      this.state.shoppingList.map(val=><li>{`${val.itemName}:${val.itemQty}`}</li>)
      )
       
  }
  render() {
    // console.log("item", [
    //   ...this.state.shoppingList,
    //   { item: "tomato", qty: 3, id: uuidv4() },
    // ]);
 

    return (
      <div className="ShoppingList">
        <ShoppingForm addItem={this.addItem} />
        <ul>{this.showItem()}</ul>
      </div>
    );
  }
}

export default ShoppingList;
