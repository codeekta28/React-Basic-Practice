import React, { useRef } from "react";
import UseImperativeHandleComponent from "./UseImperativeHandle";

function UseImperative() {
  const inputref = useRef(null);

  function keydownHandler(e) {
    console.log("key pressed", e.key);
  }
  function handleClick(){
    inputref.current.focusAndBlur();
      console.log(inputref.current.focusAndBlur());
  }
  return (
    <div>
      <h1>Use Imperative example</h1>
      <UseImperativeHandleComponent
        type="text"
        ref={inputref}
        onKeyDown={keydownHandler}
      />
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default UseImperative;
