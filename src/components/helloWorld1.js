import React, { Component } from 'react'

export default class helloWorld1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  handlePlus = () => {
    this.setState({ count: this.state.count + 1 })
  }
  hadleMinus = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePlus}>+1</button>
        {this.state.count}
        <button onClick={this.hadleMinus}>-1</button>
      </div>
    )
  }
}
