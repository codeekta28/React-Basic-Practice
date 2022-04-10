import React, { useImperativeHandle, useRef } from "react";

function UseImperativeHandleComponent(props, forwardRef) {
    const newRef=useRef()
    useImperativeHandle(forwardRef,()=>{
        return{
            focusAndBlur:()=>{
                newRef.current.focus();
                setTimeout(() => {
                   newRef.current.blur() 
                }, 1000);
            }
        }
    })
  return (
    <input type={props.type} onKeyDown={props.onKeyDown} ref={newRef} />
  );
}
const ForwardInput = React.forwardRef(UseImperativeHandleComponent);

export default ForwardInput;
