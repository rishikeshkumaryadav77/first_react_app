import React from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      count: 0,
    }
  }
  render() {
    const{name} =this.props
    const{count} = this.state
    return(
      <>
        
        <h1>{count}</h1>
        <button onClick={() =>{
          this.setState({count: count + 1})
        }}>Increase button</button>
        <button onClick={() =>{
          this.setState({ count: count - 1})
        }}>Decrease button</button>
      </>
    )
  }
} 

export default UserClass