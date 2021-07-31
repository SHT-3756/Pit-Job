import React from 'react'

const HeaderButtonGroup = ({ onPreviousPage, onNextPage }) => {
  if (typeof onPreviousPage !== 'function' || typeof onNextPage !== 'function') {
    throw new Error('onPreviouPage와 onNextPage 의 props 가 제대로 전달되지 않았습니다.')
  }
  return (
    <div>
      <button onClick={onPreviousPage}>이전 페이지</button>
      <button onClick={onNextPage}>다음 페이지</button>
    </div>
  )
}

export default HeaderButtonGroup
