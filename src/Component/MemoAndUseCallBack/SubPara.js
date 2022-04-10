import React from "react";

function SubPara(props) {
  console.log("this is subpara");
  return (
    <div>
      <h2>This is SubPara {props.name}</h2>
    </div>
  );
}

export default SubPara;
