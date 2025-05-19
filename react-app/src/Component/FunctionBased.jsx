import { useEffect, useState } from "react"
function FunctionBased(){
  const[countNum, setcountNum] = useState(0)
  const[name, setname] = useState('rishikesh')

  useEffect(() =>{
    setname('rishi')
  })
  return(
    <>
    <h1>{name}</h1>
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