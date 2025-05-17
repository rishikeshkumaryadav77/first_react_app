import { useState } from "react"
function FunctionBased(){
  const[countNum, setcountNum] = useState(0)
  return(
    <>
    <h1>{countNum}</h1>
    <button onClick={() =>{
      setcountNum(countNum+1)
    }}>Increase Count</button>
    <button onClick={() =>{
      setcountNum(countNum-1)
    }}>Decrease Count</button>
    </>
  )
}

export default FunctionBased;