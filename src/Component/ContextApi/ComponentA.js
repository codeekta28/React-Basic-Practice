import React, { useContext } from "react";
import ComponentB from "./ComponentB";
import { objectChecking } from "../../App";

function ComponentA() {
  const objectValue = useContext(objectChecking);
  
  return (
    <div>
      <h1>Age:{objectValue.age}</h1>
      <h2>City:{objectValue.city}</h2>
      <h2>Hobbies:</h2>
      {objectValue.hobbies.map(value=>{
        return <p>{value}</p>
      })}
      <ComponentB />
    </div>
  );
}

export default ComponentA;
