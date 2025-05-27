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
    <input type="checkbox" value={skills}  id="java" onChange={selsectSkill} />
    <label htmlFor="java">Java</label>
    <br />
    <input type="checkbox" value={skills}  id="javascrpt" onChange={selsectSkill}/>
    <label htmlFor="javascript">JavaScript</label>
    <br />
    <input type="checkbox" value={skills}  id="html" onChange={selsectSkill}/>
    <label htmlFor="html">Html</label>
    <br />
    <input type="checkbox" value={skills} id="css" onChange={selsectSkill}/>
    <label htmlFor="css">CSS</label>
    <br />
    <input type="checkbox" value={skills} id="reactjs" onChange={selsectSkill} />
    <label htmlFor="reactjs">ReactJs</label>
    </>
  )
}

export default CheckBox;