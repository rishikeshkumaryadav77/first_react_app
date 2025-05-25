import { useEffect, useState } from "react"

function UseEffect(){
  const[effect, setuseEffect] = useState(0)
  useEffect(() =>{
    setuseEffect("rishikesh")
  })
  return(
    <>
      <h1>{effect}</h1>
      <h1>kumar</h1>
    </>
  )
}


export default UseEffect