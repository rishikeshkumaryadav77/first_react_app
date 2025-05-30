import { useState } from "react"

function setIncrease(){
  const[increase, setIncrease]= useState(0)
  const increaseBtn = () =>{
    setIncrease(increase+1)
  }
  return(
    <>
    <h1>Count = {increase}</h1>
    <button onClick={increaseBtn}>+</button>
    </>
  )
}


export default setIncrease;