import React, { Component } from 'react'

const now = new Date()
const Today = `오늘은 ${now.getFullYear()}년 ${now.getMonth()} 월${now.getDay()}일 이다. `

export default class helloWorld extends Component {
  render() {
    return (
      <div>
        hi today is {Today}
        <br />
        <span>props.name: {this.props.name}</span>
        <br />
        <span>defaultProps: {this.props.age}</span>
        <br />
        <span>props.product.name: {this.props.product.name}</span>
        <br />
        <span>props.product.brand: {this.props.product.brand}</span>
        <br />
        <span>props.product.price: {this.props.product.price}</span>
      </div>
    )
  }
}

helloWorld.defaultProps = {
  age: '디폴트로 설정한 것이 나온다. ',
}
