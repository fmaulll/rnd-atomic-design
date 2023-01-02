import React from 'react'

const LinkAccountButton = ({children}) => {
  return (
    <button className='border-2 border-black rounded-2xl py-4 px-[72px] flex items-center'>
        {children}
    </button>
  )
}

export default LinkAccountButton