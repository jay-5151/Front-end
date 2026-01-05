import React, { Component } from "react";

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.state.title}</h5>
          <p className="card-text">
           {this.state.desc}
          </p>
          <button className="btn btn-success">buy now</button>
        </div>
      </div>
    );
  }
}
export default Class
