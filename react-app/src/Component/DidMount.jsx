import React, {Component} from 'react'

class DidMount extends Component{
  constructor(){
    super()
    this.state = {
      name:'rishi'
    }
}

componentDidMount(){
  this.setState({name:'rishikesh'})
}

render(){
  const{name} = this.state
  return(
    <>
  <h1>{name}</h1>
    </>
  )
}

}

export default DidMount;