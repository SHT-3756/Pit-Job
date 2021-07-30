import React from 'react'

function LoadingIndicator({ isLoading }) {
  if (typeof isLoading !== 'boolean') {
    throw new Error(' isLoading 의 props가 제대로 전달되지 않았습니다.')
  }
  if (isLoading) {
    return null
  }
  return <div>로딩중 ~</div>
}

export default LoadingIndicator
