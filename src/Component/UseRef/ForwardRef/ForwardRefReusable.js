import React from 'react'

function ForwardRefReusable(props,ref) {
    const{type,placeholder,onKeyDown}=props
  return (
<input ref={ref} type={type} placeholder={placeholder} onKeyDown={onKeyDown}>

</input>
  )
}
const forwardInput=React.forwardRef(ForwardRefReusable)

export default forwardInput