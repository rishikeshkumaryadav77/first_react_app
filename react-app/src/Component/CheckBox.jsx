import { useState } from "react";

function CheckBox(){
  const[skills, setSkills] = useState([])

  const selsectSkill = (event) =>{
    setSkills(event.target.value)
    console.log(event.target.value, event.target.checked)
  }

  return(
    <>
    <h1>Select Skills</h1>
    <input type="checkbox" value="java"  id="java" onChange={selsectSkill} />
    <label htmlFor="java">Java</label>
    <br />
    <input type="checkbox"  id="javascrpt"/>
    <label htmlFor="javascript">JavaScript</label>
    <br />
    <input type="checkbox"  id="html"/>
    <label htmlFor="html">Html</label>
    <br />
    <input type="checkbox" id="css"/>
    <label htmlFor="css">CSS</label>
    <br />
    <input type="checkbox"id="reactjs" />
    <label htmlFor="reactjs">ReactJs</label>
    </>
  )
}

export default CheckBox;