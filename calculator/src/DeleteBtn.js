import React from 'react'

const DeleteBtn = ({backspace}) => {
  return <button className='btn del-btn' onClick={backspace}>
    del
  </button>
}

export default DeleteBtn;