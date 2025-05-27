import { useState } from "react"

function RadioDrop(){
  const[gender, setGender] = useState("male")
  const[city, setCity] = useState("choosecity")

  const selectGender = (event) =>{
    setGender(event.target.value)
  }
  return(
    <>
      <h1>Drop And Down</h1>
      <input type="radio" name="gender" checked={gender == "female"} value={"female"} id="female" onChange={selectGender}/>
      <label htmlFor="female">Female</label>
      <input type="radio" name="gender" checked={gender == "male"} value={"male"} id="male" onChange={selectGender} />
      <label htmlFor="male">male</label>
      <h3>you are {gender}</h3>
      <h1>Select & option</h1>
      <select onChange={(event) => setCity(event.target.value)}  defaultValue={"delhi"}>
        <option value={"delhi"}>delhi</option>
        <option value="hyderabad">hyderabad</option>
        <option value="tamilnadu">tamilnadu</option>
        <option value="warnagal">warangal</option>

      </select>

      <h1>y choosed city {city}</h1>
    </>
  )
}

export default RadioDrop