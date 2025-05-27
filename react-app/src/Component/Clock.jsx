import React, { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState();
  const [Color, setColor]= useState("")
  

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);

    // return () => {
    //   clearInterval(timerID);
    // };
  }, []);

  return (
    <>
    
    <h1 >change clock color</h1>
    <select  onChange={(event) =>setColor(event.target.value)} defaultValue={"yellow"}>
      <option value="red">red</option>
      <option value="yellow">yellow</option>
      <option value="blue">blue</option>
      <option value="pink">pink</option>
      <option value="yellowgreen">yellowgreen</option>
    </select>
      <h1 style={{backgroundColor:"black", width:"70%", height:"80px",borderRadius:"8px", textAlign:"center", color:Color}}>{date}</h1>
    </>
  );
}

export default Clock;
