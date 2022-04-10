import React, { Component } from 'react'
import ChildREcievingFunctionAsProp from './ChildREcievingFunctionAsProp';

export class PassingFunctionAsProp extends Component {
    constructor(props){
        super(props);
        this.state={
            numbers:[1,2,3,4,5]
        }
        this.remove=this.remove.bind(this);
    }
    remove(num){
        this.setState((prevState,props)=>{
            return {
                numbers:prevState.numbers.filter((n)=>n!==num)
            }
        })
    }
  render() {
      const finalList=this.state.numbers.map((num)=><ChildREcievingFunctionAsProp value={num} remove={this.remove}/>)
    return (
      <div className='PassingFunctionAsProp'>
          <h1>This is parent</h1>
        <ul>{finalList}</ul>
      </div>
    )
  }
}

export default PassingFunctionAsProp