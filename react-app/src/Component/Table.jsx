function Table(){
  const userData =[
    {
      "id": 1,
      "name": "John",
      "age": 25,
      "city": "New York"
    
    },
    {
      "id": 2,
      "name": "Anna",
      "age": 30,
      "city": "london"
    },
    {
      "id": 3,
      "name": "Annabhai",
      "age": 30,
      "city": "hyderabad"
    },
    {
      "id": 4,
      "name": "Ananad",
      "age": 30,
      "city": "banglore"
    }
  ]
  return(
    <>
    <h1>data will shown in Table</h1>
    <table border={"1"}>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>city</th>
        </tr>
        
          {
            userData.map((data, index) =>{
              return(
                <tr>
                  <th>
                    {data.id}
                  </th>
                  <th>
                    {data.name}
                  </th>
                  <th>
                    {data.age}
                  </th>
                  <th>
                    {data.city}
                  </th>
                </tr>
              )
            })
          }
        
      </thead>
    </table>
    </>
  )
}

export default Table