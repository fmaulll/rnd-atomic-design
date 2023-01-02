import React from 'react'

const InputText = ({...other}) => {
  return (
    <input {...other} className='w-full px-4 py-3 border rounded border-gray-300 text-xs focus:outline-none '  />
  )
}

export default InputText