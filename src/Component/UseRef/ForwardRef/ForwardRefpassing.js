import React, { useRef, useEffect } from "react";
import ForwardRefReusable from "./ForwardRefReusable";

function ForwardRefChild() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);
  // focus on first name as soon as page loads
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  //  focus on second name as soon as there is enter on first name
  function firstNameKeyHandler(e) {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  }
  //  focus on button as soon as there is enter on last name
  function lastNameKeyHandler(e) {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }
  }
  function buttonHandler() {
    return alert("form Submitted");
  }

  return (
    <div className="ForwardRefChild">
      <h1>Forward Ref</h1>
      <ForwardRefReusable
        type="text"
        ref={firstNameRef}
        onKeyDown={firstNameKeyHandler}
        placeholder="First Name"
      />
      <ForwardRefReusable
        type="text"
        ref={lastNameRef}
        onKeyDown={lastNameKeyHandler}
        placeholder="last Name"
      />
      <button type="submit" onKeyDown={buttonHandler} ref={submitRef}>
        Submit
      </button>
    </div>
  );
}

export default ForwardRefChild;
// consider the situation if this input come from reusable componnets than it would be much easier from react point of view but everything can be passes as prop but not ref to pass ref as prop we need forward ref
//
