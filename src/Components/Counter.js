import React, { Component } from "react";
import '../App.css';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.Zero = this.Zero.bind(this);


  }
  addOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  minusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }

  Zero() {
    this.setState(prevState => {
      return { count: prevState.count = 0 }
    })
  }



  render() {
    return (
      <div className='background'>
        <h1 >{this.state.count}</h1>

        <button className="btn1" onClick={this.addOne} >Plus</button>
        <br />
        <button className="btn2" onClick={this.minusOne} >Minus</button>
        <br />
        <button  className="btn3" onClick={this.Zero}>Clear</button>
      </div>
    );
  }
}

export default Counter;