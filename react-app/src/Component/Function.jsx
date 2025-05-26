function Function(){

  let fruits = "mango"

  function changeFruit(name){
    return name
  }

  return(
    <>
    <h1>{fruits}</h1>
    <button onClick={changeFruit("rishi")}>Change Fruits Name</button>
    </>
  )
}

export default Function;