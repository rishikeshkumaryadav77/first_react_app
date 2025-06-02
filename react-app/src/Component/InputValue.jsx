// export default function InputValue(){
//   const showData= (event)=>{
//     event.preventDefault()
//     console.log(event.target[0].value, event.target[1].value)
//   }
//   return(
//     <>
//     <h1>Input value...</h1>
//     <form  onSubmit={showData}>
//     <input type="text" placeholder="entername" name="name" />
//     <br />
//     <input type="password" placeholder="enterpassword" />
//     <br />
//     <button type="submit">show data</button>
//     </form>
//     </>
//   )
// }

import { useState } from "react"


export default function InputValue(){
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [showName, setShowName] = useState('')
  const [showPassword, setShowPassword] = useState('')


  const showData= ()=>{
    setShowName(name)
    setShowPassword(password)
  }
  const hideData= ()=>{
    setShowName('')
    setShowPassword('')
  }
  return(
    <>
    <h1>Input value...</h1>
    <input type="text" placeholder="entername" name="name" onChange={(event)=>setName(event.target.value)}/>
    <br />
    <input type="password" placeholder="enterpassword"  onChange={(event)=>setPassword(event.target.value)}/>
    <br />
    <button onClick={showData}>show data</button>
    <button onClick={hideData}>Hide data</button>
    <h1>{showName}</h1>
    <h1>{showPassword}</h1>
    </>
  )
}