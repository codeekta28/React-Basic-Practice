import React, { useRef } from "react";

function UseRefFocus() {
    const inputRef=useRef(null)
  function handleSubmit(e) {
    e.preventDefault();
    inputRef.current.focus()
    console.log(inputRef.current);
  }
  return (
    <div className="UseRefFocus">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">focus</button>
      </form>
    </div>
  );
}

export default UseRefFocus;
