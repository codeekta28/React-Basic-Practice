import React from 'react'

function Button(props) {
    console.log("this is button");
  return (
    <button onClick={props.onClick}>{props.children}</button>
  )
}

export default React.memo(Button)