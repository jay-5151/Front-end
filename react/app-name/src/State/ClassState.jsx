import React, { Component } from 'react'

 class ClassState extends Component {
  constructor(){
    super()
    this.state={
      name:"ravi vora",
      count:0,
      isIamge:true
    }
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>hello name:{this.state.name} </h1>
        <button onClick={()=>this.setState({name:"jay vaghela"})}>change me</button>
        <button onClick={()=>this.setState({name:"biren patel"})}>change out</button>

        <h2>hello count:{this.state.count}</h2>
        <button onClick={()=>this.setState({count:this.state.count+1})}>barmastra</button>
        <button onClick={()=>this.setState({count:this.state.count-1})}>hindu</button>
      </div>
    )
  }
}

export default ClassState