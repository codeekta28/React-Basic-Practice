import React, { useEffect, useState } from "react";
import { useRef } from "react";

function UseRef() {
  const lName = useRef(null);
  //   if you check lname than it contain a current obhect which contain the complete dom node od that refernce value
  console.log("check reference",lName);
  const [displayLine, setDisplayLine] = useState(false);
  function handleFormSubmit(e) {
    e.preventDefault();

    lName.current.value.length > 0
      ? setDisplayLine(true)
      : alert("Please enter something in input field");
 
  }


  return (
    <React.Fragment>
      <h1>UseRef</h1>
      <form className="UseRef" onSubmit={handleFormSubmit}>
        <label htmlFor="luckyName">Enter your lucky Name</label>
        <input type="text" name="luckyName" id="luckyName" ref={lName} />
        <button type="submit">Click Me</button>
      </form>
      {displayLine && <h1> Your Lucky Name is {lName.current.value}</h1>}
    </React.Fragment>
  );
}

export default UseRef;
