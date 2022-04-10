import React, { Component } from 'react'

export class ChildREcievingFunctionAsProp extends Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        
      this.props.remove(this.props.value)
    }
  render() {
    return (
      <div className='ChildREcievingFunctionAsProp'>
        <li>{this.props.value}</li>
        <button onClick={this.handleClick}>remove</button>
      </div>
    )
  }
}

export default ChildREcievingFunctionAsProp