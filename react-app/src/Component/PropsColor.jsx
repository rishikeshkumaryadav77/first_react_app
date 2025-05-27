import { useState } from "react";
import Clock from "./Clock";

function PropsColor() {
  const [Color, setColor] = useState("yellow");

  return (
    <>
      <h1>Change clock color</h1>
      <select onChange={(event) => setColor(event.target.value)} defaultValue={"yellow"}>
        <option value="red">red</option>
        <option value="yellow">yellow</option>
        <option value="blue">blue</option>
        <option value="pink">pink</option>
        <option value="yellowgreen">yellowgreen</option>
      </select>
      <Clock Color={Color} />
    </>
  );
}

export default PropsColor;
