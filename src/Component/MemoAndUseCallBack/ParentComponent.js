import React, { useState, useCallback } from "react";
import Button from "./Button";
import ParagraphFile from "./ParagraphFile";

function ParentComponent() {
  const [showPara, setShowPara] = useState(false);
  const [activate, setActivate] = useState(false);

  console.log("this is parent");
  // function handleClick(){
  //     setName("ekta")
  //     setShowPara(prevState=>!prevState)
  // }
  const handleClick = useCallback(() => {
    // here is how closure works now if u change the value of activate outside the function it doesnt matter it made its reference to it which is initial value
    console.log("callBack", activate);
    if (activate) {
      setShowPara((prevState) => !prevState);
    }
  }, [activate]);

  function activateButtonHandle() {
    setActivate(true);
  }
  return (
    <div>
      <ParagraphFile show={false} />
      <Button onClick={activateButtonHandle}>Activate</Button>
      <Button onClick={handleClick}>ShowPara</Button>
    </div>
  );
}

export default ParentComponent;
