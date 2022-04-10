import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { firstName,lastName } from '../../App'
// this is an example of use Cotext
function ComponentB() {
  const fName=useContext(firstName);
  const lName=useContext(lastName);
  return (
    <div>
      <h1>My name in component b {fName} {lName}</h1>
      <ComponentC/></div>
  )
}

export default ComponentB