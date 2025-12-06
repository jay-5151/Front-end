import React, { Component } from 'react'

class DemoProps extends Component {

    constructor(props){
        super(props);
        this.data = props
    }
  render() {
    return (
      <div>
     <div className="card" style={{width: '18rem'}}>
  <img src={this.data.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{this.data.title}</h5>
    <p className="card-text">{this.data.desc}</p>
    <button className='btn btn-primary'>Add to Carts</button>
  </div>
</div>

      </div>
    )
  }
}

export default DemoProps