import "./App.css";
import React, { Component, createContext } from "react";
// import Greet from "./Component/Greet";
// import Machine from "./Component/Machine";
// import Looping from "./Component/Looping";
// import DefaultProps from "./Component/DefaultProps";
// import StylingReact from "./Component/StylingReact";
// import SendingComment from "./Component/SendingComment";
// import ReactState from "./Component/ReactState";
// import ImmutableMutateStateDate from "./Component/ImmutableMutateStateDate";
// import PassingFunctionAsProp from "./Component/PassingFunctionAsProp";
// import Form from "./Component/Form";
// import ShoppingList from "./Component/ShoppingList";
// import ComponentMount from "./Component/ComponentMount";
import AsyncComponentMount from "./Component/AsyncComponentMount";
import UseEffect from "./Component/UseEffect";
import UseReducer from "./Component/UseReducer";
import UseReducerForm from "./Component/UseReducerForm";
import ComponentA from "./Component/ContextApi/ComponentA";
import UseRef from "./Component/UseRef/UseRef";
import UseRefFocus from "./Component/UseRef/UseRefFocus";
import ForwardRefpassing from "./Component/UseRef/ForwardRef/ForwardRefpassing";
import ForwardRefReusable from "./Component/UseRef/ForwardRef/ForwardRefReusable";
import UseImperative from "./Component/UseRef/ForwardRef/UseImperative";
import ParentComponent from "./Component/MemoAndUseCallBack/ParentComponent";
const firstName = createContext();
const lastName = createContext();
const objectChecking = createContext();
class App extends Component {
  render() {
    const heading = {
      color: "#03045e",
      backgroundColor: "#ade8f4",
      textTransform: "upperCase",
      fontStyle: "italic",
      width: "60%",
      textAlign: "center",
      border: "2px solid #03045e ",
    };
    const imp = {
      backgroundColor: "red",
      fontWeight: "bold",
      color: "white",
    };
    const para = {
      width: "60%",
    };
    const subHeading = {
      backgroundColor: "#ee9b00",
      color: "#9b2226",
      width: "60%",
      padding: "10px",
      textAlign: "center",
      border: "2px solid #9b2226",
    };

    return (
      <div>
        {/* <h1 style={heading}>
          1.this is practice of component creation and passing prop{" "}
        </h1>
        <Greet
          name="ekta"
          hobbies={["singing", "dancing", "playing"]}
          biodata={{ age: 23, city: "Bangalore", id: 1 }}
        />
        <Greet
          name="pooja"
          hobbies={["singing", "dancing", "playing"]}
          biodata={{ age: 33, city: "Delhi", id: 2 }}
        />
        <h2 style={subHeading}>
          =>You can also break components into multiple subComponents to
          simplyfy below is an example where sendingComment pass props to
          comment and comment breaks into subComponent
        </h2>
        <SendingComment />
        <h1>
          *********************************************************************************
        </h1>
        <h1 style={heading}>
          2.This is practice of condition specially ternary in jsx
        </h1>
        <Machine s1={1} s2={1} s3={1} playerName="Ekta" age={33} />
        <Machine s1={2} s2={1} s3={1} playerName="Suneta" age={14} />
        <h1>
          *********************************************************************************
        </h1>
        <h1 style={heading}>3.looping practice</h1>
        <Looping name="ekta" hobbies={["singing", "dancing", "playing"]} />
        <h1>
          *********************************************************************************
        </h1>
        <h1 style={heading}>4.Default props</h1>
        <DefaultProps />
        <h1>
          *********************************************************************************
        </h1>
        <h1 style={heading}>5.Styling React</h1>
        <StylingReact favColor="red" otherColor="black" />
        <h1>
          *********************************************************************************
        </h1>
        <h1 style={heading}>6.Import Export in React</h1>
        <h2>
          To see example open{" "}
          <span style={imp}> basic import export practice</span> project in
          practice folder
        </h2>
        <h1 style={heading}>7.pokedox Project in React</h1>
        <h2 style={para}>
          To see example open <span style={imp}> basic pokedox practice</span>{" "}
          project in practice folder.This program is to test the knowledge which
          u have gained till now.
        </h2>
        <h1 style={heading}>8.State in react</h1>
        <ReactState maxNum={40} />
        <h1 style={heading}>9.Roll Dice Project</h1>
        <h2 style={para}>
          To see example open <span style={imp}> basic roll dice </span> project
          in practice folder.This program is to test the knowledge which u have
          gained till now specially state.
        </h2>
        <h1 style={heading}> 10.Mutable/Immutable datastructure in State</h1>
        <p>
          It is better practice to use immutable approch in changing the state
          below will show both examples
        </p>
        <ImmutableMutateStateDate />
        <h1 style={heading}>11.Lottery Ticket Project</h1>
        <h2 style={para}>
          To see example open <span style={imp}> basic lottery project </span>{" "}
          project in practice folder.This program is to test the knowledge which
          u have gained till now specially state patterns ie data stucture in
          state.
        </h2>
        <h1 style={heading}>12.Coin flipper Project</h1>
        <h2 style={para}>
          This project is made to practice state and its pattern and u will find
          it open <span style={imp}> basic coin flipper </span> project in
          practice folder
        </h2>
        <h1 style={heading}>13.Color box Project</h1>
        <h2 style={para}>
          This project is made to practice state and its pattern and u will find
          it open <span style={imp}> basic color box </span> project in practice
          folder
        </h2>
        <h1 style={heading}>14.React Events={">"}Passing function as prop</h1>
        <h2 style={para}>This program remove value while clicking on button</h2>
        <PassingFunctionAsProp />
        <h1 style={heading}>15.hangman Project</h1>
        <h2 style={para}>
          This project is made to practice react events and u will find it open{" "}
          <span style={imp}> basic hangman-exercise </span> project in practice
          folder
        </h2>
        <h1 style={heading}>16.Lights Out Project</h1>
        <h2 style={para}>
          This project is made to practice react events and u will find it open{" "}
          <span style={imp}> basic Lights out game </span> project in practice
          folder
        </h2>
        <h1 style={heading}>16.Forms In reactt</h1>
        <h2 style={para}>Example-1 Simple form Example</h2>
        <Form />
        <h2 style={para}>Example-2 Shopping List Example</h2>
        <ShoppingList />
        <h1 style={heading}>17.ColorBox Maker Project</h1>
        <h2 style={para}>
          This project is made to practice react forms more deeply and u will
          find it open <span style={imp}> basic-colorbox-maker </span> project
          in practice folder
        </h2>
        <h1 style={heading}>18.ToDo App Project</h1>
        <h2 style={para}>
          This project is made to practice react forms more deeply and u will
          find it open <span style={imp}> basic-todo-app </span> project in
          practice folder
        </h2>
        <h1 style={heading}>19.Basic Yahtzee Game</h1>
        <h2 style={para}>
          This project is made to practice react forms and events deeply and u
          will find it open <span style={imp}> basic-yahtzee-game </span>{" "}
          project in practice folder.I didnt complete Yahtzee game bcoz i want
          to make some independent programs will definetly complete later
        </h2>
        <h1 style={heading}>19.Basic udemy2nd course project</h1>
        <h2 style={para}>
          This project is made to practice other projects in the second course
          and to understand it more profoundly.you will find it open{" "}
          <span style={imp}> basic-udemy2ndcourse project </span> in practice
          folder
        </h2>
        <h1 style={heading}>20.Basic udemy2nd course project2</h1>
        <h2 style={para}>
          This project is made to practice other projects in the second course
          and to understand it more profoundly.you will find it open{" "}
          <span style={imp}> basic-signup project </span> in{" "}
          <span style={imp}> Maximilion project Practice folder</span> which is
          in practice folder
        </h2> */}
        {/* <h1 style={heading}>20.LifeCycle Methods and UseEffect</h1> */}
        {/* <ComponentMount/> */}
        {/* <AsyncComponentMount userName="colt"/> */}
        {/* <UseEffect /> */}
        {/* <h1 style={heading}>21.UseReduce </h1> */}
        {/* <UseReducer/> */}
        {/* <UseReducerForm/> */}
        {/* <h1 style={heading}>21.Context Api</h1>
        <objectChecking.Provider
          value={{
            age: 32,
            city: "bangalore",
            hobbies: ["exercising", "movies"],
          }}
        >
          <firstName.Provider value="Pooja">
            <lastName.Provider value="rana">
              <ComponentA />
            </lastName.Provider>
          </firstName.Provider>
        </objectChecking.Provider> */}
        {/* <h1 style={heading}>22.Use REference</h1>
        <h2 style={para}>
          This is used to make component where the form is as uncontrolled so
          that u can get access to real dom and u can manioulate the real dom
        </h2> */}
           <UseRef/>
           <UseRefFocus/>
           <ForwardRefpassing/>
           <UseImperative/>
            {/* <h1 style={heading}>23.Food Ordering Project</h1>
            <h2 style={para}>
          This project is made to practice all the concepts of hook which u have learned and it is really imp you will find this project inside
          <span style={imp}> food ordering project </span> in Maxmilion project practice inside practice
          folder
        </h2> */}
        <h1 style={heading}>24.React Memo and callBack</h1>
        {/* this is in folder MemoAndCallBack */}
        <ParentComponent/>
      </div>
    );
  }
}

export default App;
export { firstName, lastName, objectChecking };
