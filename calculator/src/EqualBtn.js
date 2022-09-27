import React from 'react'

const EqualBtn = ({getResult}) => {
  return <button className='btn equal-btn' onClick={getResult}>
    =
  </button>
}

export default EqualBtn;