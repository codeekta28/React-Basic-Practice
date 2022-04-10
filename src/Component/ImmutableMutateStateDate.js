import React, { Component } from "react";

export class ImmutableMutateStateDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: "do the dishes", done:false, id: 1 },
        { task: "vacuum the floor", done:false, id: 2 },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }
//   mutate example
//   handleClick() {
//     const id = 2;
//     const theTodos = this.state.todos.find((t) => t.id === id);
//     // bad here we are making changes in state and assigning it to variable
//     theTodos.done = true;
//     this.setState({
//       todos: this.state.todos,
//       // very bad practice
//     });
//   }
// immutable example
handleClick(){
    let id=2;
    let newTodos=this.state.todos.map(todo=>{
        if(todo.id===id){
            return{...todo,done:true}
        }
        return todo;
    })
    this.setState({
        todos:newTodos
    })
}
  render() {
    return (
      <div className="immutableMutateStateDate">
        <h3>Mutate Example</h3>

        <button onClick={this.handleClick}>Click to check status</button>

      </div>
    );
  }
}

export default ImmutableMutateStateDate;
