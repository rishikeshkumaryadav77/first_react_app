import { useReducer } from "react";

const initialValue = 0
function countReducer(state, action) {
switch (action.type) {
  case "Increment":
    return state + 1
  case "Decrement":
    return state - 1
  case "Reset":
    return 0

  default:
    return state;
}
}


function UseReduce(){

  const [count, dispatch] = useReducer(countReducer, initialValue)
  return (
    <>
    <h1>count: {count}</h1>
    <button onClick={() => dispatch({type:"Increment"})}>+</button>
    <button onClick={() => dispatch({type:"Decrement"})}>-</button>
    <button onClick={() => dispatch({type:"Reset"})}>0</button>
    </>
  )
}
export default UseReduce;