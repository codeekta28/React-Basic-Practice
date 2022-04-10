
import React, { useReducer } from "react";
// u can create the reducer function outside the component because it doesnt take any component value
const initialValue = 0;
function reducerFn(state, action) {
  console.log("state", state, action.type);
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
  return state;
}

function UseReducer() {
  // synatax of reducer
  const [stateValue, dispatch] = useReducer(reducerFn, initialValue);
  const stateColor = {
    color: stateValue < 0 ? "red" : "green",
  };
  return (
    <div>
      <h1>useReducer</h1>
      <h1 style={(stateColor)} className="reducerValue">
        {stateValue}
      </h1>
      <button onClick={() => dispatch({ type: "increment" })}>Incre</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decre</button>
    </div>
  );
}

export default UseReducer;
