import { useState } from "react";

function Toggle(){
  const[toggle, setToggle] = useState(true)
  const handleToggle = () =>{
    setToggle(!toggle)
  }
  return(
    <>
    <h1>Toggle in react</h1>
    <button onClick={handleToggle}>click for Show/Hide</button>
    {
      toggle?<h1>rishi </h1>:null
    }
    
    </>
  )
}

export default Toggle;