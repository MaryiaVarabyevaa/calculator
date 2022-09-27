import React from 'react'

const CountBtn = ({arrCount, handleClick}) => {
    return <>
      {
        arrCount.map((count) => {
          const {id, sing, name, classElem} = count;
          return <button key={id} name={name} className={`btn count-btn ${classElem}`} onClick={handleClick}>
            {sing}
          </button>
        })
      }
    </>
};

export default CountBtn;