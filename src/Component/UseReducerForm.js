import React, { useReducer } from "react";
import styles from "./UseReducerForm.module.css";
const initialState = { value: "", isValid: false };
const passInitialState = { value: "", isValid: false };

function reducerFn(state, action) {
  //   console.log("state,action",state,action);
  if (action.type === "emailInput") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "validate") {
    return { value: state.value, isValid: state.value.includes("@") };
    //   here state.value represents the previous value
  }

  return { value: "", isValid: false };
}
function passReducerFn(state, action) {
  if (action.type === "passValue") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "passValidate") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false, formValid: false };
}

function UseReducerForm() {
  // useReducer for Email
  const [stateEmailValue, dispatchEmailFn] = useReducer(
    reducerFn,
    initialState
  );
  function EmailChangeHandler(e) {
    dispatchEmailFn({ type: "emailInput", val: e.target.value });
  }
  function emailValidateHandler() {
    dispatchEmailFn({ type: "validate" });
  }
  //   password handling
  //   useReducer for password
  const [statePassValue, dispatchPassFn] = useReducer(
    passReducerFn,
    passInitialState
  );
  //   passWordChange Handler
  function passChangeHandler(e) {
    dispatchPassFn({ type: "passValue", val: e.target.value });
  }
  function passValidateHandler() {
    dispatchPassFn({ type: "passValidate" });
  }

  return (
    <form className={styles.useReducerForm}>
      <div className={stateEmailValue.isValid === false ? styles.inValid : ""}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={EmailChangeHandler}
          onBlur={emailValidateHandler}
          name="email"
          value={stateEmailValue.value}
        />
      </div>
      <div className={statePassValue.isValid === false ? styles.inValid : ""}>
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          name="pass"
          value={statePassValue.value}
          onChange={passChangeHandler}
          onBlur={passValidateHandler}
        />
      </div>
      <button
        type="submit"
        disabled={
          stateEmailValue.isValid === false || statePassValue.isValid === false
        }
      >
        Login
      </button>
    </form>
  );
}

export default UseReducerForm;
