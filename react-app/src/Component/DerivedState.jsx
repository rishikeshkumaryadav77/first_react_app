import { useState } from "react";

function DerivedState() {
  const [totalUser, setTotalUser] = useState([]);
  const [user, setUser] = useState("");

  const addUser = () => {
    if (user.trim()) {                // optional: ignore blanks
      setTotalUser([...totalUser, user]);
      setUser("");                    // optional: clear the input
    }
  };
const totalLength = totalUser.length;
const recentAdded = totalUser[totalUser.length-1]
  return (
    <>
      <h1>Derived state</h1>

      <input
        type="text"
        placeholder="enter ur name"
        value={user}                   // make it a controlled input
        onChange={e => setUser(e.target.value)}
      />

      <button onClick={addUser}>Add member</button>

      {totalUser.map((userOne, index) => (
        <h2 key={index}>{userOne}</h2>  
      ))}
      <h1>Total member {totalLength}</h1>
      <h1>Recent Added member {recentAdded}</h1>
    </>
  );
}

export default DerivedState;
