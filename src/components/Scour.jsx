import React from 'react'

export default function Scour({number, GameNumber, selectedNum}) {
    const handelOnClick = () => {
        GameNumber(number)
    }
  return (
    <div className={`border border-gray-600 px-6 py-4 cursor-pointer hover:bg-gray-600 hover:text-white ${selectedNum == number && 'bg-gray-600'}`} onClick={handelOnClick}>{number}</div>
  )
}
