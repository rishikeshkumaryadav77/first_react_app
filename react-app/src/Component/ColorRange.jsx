import { useState } from "react";

function ColorRange(){
  const [red, setRed] = useState(0)
  console.log(red)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)
  const saveColor = () =>{
    localStorage.setItem('color',JSON.stringify({red, green, blue}))
  }
  return(
    <>
    <h1>Color Mixer</h1>
    <div style={{backgroundColor : 'rgb('+red+','+green+','+blue+'  )', height:"400px", width:"400px"}}></div>
    <label htmlFor="">Red</label>
    <input type="range" min={0} max={255} onChange={(event) => setRed(event.target.value)}/>

    <br />
    <br />
    <label htmlFor="">Green</label>
    <input type="range" min={0} max={255} onChange={(event) => setGreen(event.target.value)}/>
    <br />
    <br />
    <label htmlFor="">Blue</label>
    <input type="range" min={0} max={255} onChange={(event) => setBlue(event.target.value)}/>
    <br />
    <br />
    <button onClick={saveColor}>Save</button>
    </>
  )
}


export default ColorRange;