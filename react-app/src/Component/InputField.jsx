import { useState } from "react"

function InputField(){
  const [Input, setInput] = useState("")
  return(
    <>
     <h1>Input Valu</h1>
    <input type="text" value={Input} placeholder="Enter value"  onChange={(e) => setInput(e.target.value)} />
   
    <h3>You Entered: {Input}</h3>
    <button onClick={()=>{
      setInput("");
    }}>Clear</button>
    </>
  )
}

export default InputField;