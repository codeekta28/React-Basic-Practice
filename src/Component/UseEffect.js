import React, { useEffect, useState } from "react";
// this is an example to understand effect

function UseEffect() {
  const [grow, setGrow] = useState(0);
  const [born, setBorn] = useState(false);
  const [nirvana, setNirvana] = useState(false);
  function handleClick() {
    setGrow((prevState) => {
      return prevState + 10;
    });
   
  }
  // As we know that useeffect is the combination of all the lifecycle methods here is the useeffect showing example of mounting if you want to run it single time than make empty dependencies
  useEffect(() => {
    console.log("i am born");
    document.title = "I am born";
  }, []);

  // You can use as many useeffect in your component here this is an example for componentdidUpdate but u dont need to put dependencies
  useEffect(() => {
    if (born) {
      console.log(`i am growing and my growth is ${grow} years `);
      document.title = `My growth is ${grow} years`;
    }else{
      setBorn(true);
    }
    if (grow > 70) {
      setNirvana(true);
    }
    // if you want to unmount than return this function
    return function cleanUp(){
      console.log("unmounting cleanup after mistakes");
    }
  });

  // only runs when dependency satisfied
  useEffect(() => {
    if (born) {
      document.title = `reached nirvana ${grow}`;
    }
  }, [nirvana]);
  return (
    <div>
      {console.log("render")}
      <h1>UseEffect-Showing your Growth</h1>
      <h3>Growth:{grow}</h3>
      <button onClick={handleClick}>Growing</button>
    </div>
  );
}

export default UseEffect;
