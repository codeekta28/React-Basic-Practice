import React from "react";
import { firstName, lastName } from "../../App";
// this is an example of context api
function ComponentC() {
  return (
    <div>
      <firstName.Consumer>
        {(fName) => {
          return (
            <lastName.Consumer>
              {(lName) => {
               return <h1>
                  My Name in component c {fName} {lName}
                </h1>;
              }}
            </lastName.Consumer>
          );
        }}
      </firstName.Consumer>
    </div>
  );
}

export default ComponentC;
