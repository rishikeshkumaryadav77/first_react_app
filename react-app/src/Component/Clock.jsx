import React, { useState, useEffect } from 'react';
import PropsColor from './PropsColor';

function Clock({ Color }) {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <>
    <h1
      style={{
        backgroundColor: "black",
        width: "70%",
        height: "80px",
        borderRadius: "8px",
        textAlign: "center",
        color: Color,
        lineHeight: "80px"
      }}
    >
      {date}
    </h1>
    </>
    
  );
}

export default Clock;
