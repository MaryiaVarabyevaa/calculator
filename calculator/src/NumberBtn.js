import React from 'react'

function NumberBtn({numbers, handleClick}) {
  return <>
      {
        numbers.map((number, index) => {
          return <button key={index} className='btn' name={number} onClick={handleClick}>
            {number}
          </button>
        })
      }
    </>
}

export default NumberBtn;