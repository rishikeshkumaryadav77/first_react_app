import { useEffect, useState } from "react"

 

function UseEffect(){
  const[effect, setuseEffect] = useState(0)
  useEffect(() =>{
    setuseEffect("rishikesh")
  })

  const name = (name) =>{
    return (name)
  }
  return(
    <>
      <h1>{effect}</h1>
      <h1>kumar</h1>
    <h2>{name("yadav")}</h2>
    </>
  )
}


export default UseEffect