import React from 'react'
import SideDash from '../molecules/SideDash'

const WelcomePage = ({children}) => {
  return (
    <div className="flex justify-between h-screen">
      <div className="flex ml-[115px] items-center justify-center">
        {children}
      </div>
      <SideDash />
    </div>
  )
}

export default WelcomePage