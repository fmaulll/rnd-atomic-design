import React from 'react'

const Button = ({children, handleClick}) => {
  return (
    <button onClick={handleClick} className='w-[118px] px-2.5 py-2 bg-[#575DFB] text-white rounded active:bg-blue-300 duration-200'>{children}</button>
  )
}

export default Button