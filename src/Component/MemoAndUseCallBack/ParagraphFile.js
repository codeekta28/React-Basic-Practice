import React from "react";
import SubPara from "./SubPara";

function ParagraphFile(props) {
    console.log("this is para");
  return (
    <div>
      <h1>{props.show?<p>This is para</p>:""}</h1>
      {/* as subpara is not affected by change in prop we should stop its rendering using memo */}
      <SubPara name="ekta"/>
    </div>
  );
}

export default React.memo(ParagraphFile);
