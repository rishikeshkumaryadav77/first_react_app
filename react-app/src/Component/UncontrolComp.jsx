import { useRef, useState } from "react";

function UncontrolComp() {

  const refname = useRef();
  const refpassword = useRef();
  // const [displayName, setDisplayName] = useState("");

  const inputHnadler = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    console.log(name);
    console.log(password);
  };

  const inputHnadlerRef = (event) => {
    event.preventDefault();
    const name = refname.current.value;
    const password = refpassword.current.value;
    console.log(name);
    console.log(password);
    // setDisplayName(name);
  };

  return (
    <>
      <h1>Unctrol Component with query</h1>
      <form action="" method="post" onSubmit={inputHnadler}>
        <input type="text" id="name" placeholder="enter name" />
        <input type="password" id="password" placeholder="enter password" />
        <button>Submit</button>
      </form>
      <hr />
      <h1>Unctrol Component with useRef</h1>
      <form action="" method="post" onSubmit={inputHnadlerRef}>
        <input ref={refname} type="text" placeholder="enter name" />
        <input ref={refpassword} type="password" placeholder="enter password" />
        <button>Submit</button>
      </form>
      {/* {displayName && (
        <p>
          Entered Name: <strong>{displayName}</strong>
        </p>
      )} */}
    </>
  );
}

export default UncontrolComp;
