import { Component } from 'react'

class LoadingIndicator extends Component {
  constructor(props) {
    super(props)
    if (typeof this.props.isLoading !== 'boolean') {
      throw new Error('isLoading props 가 전달되지 않았습니다.')
    }
  }
  render() {
    if (!this.props.isLoading) {
      return null
    }

    return <span>로딩중...</span>
  }
}

export default LoadingIndicator
