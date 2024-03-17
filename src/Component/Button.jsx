import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-yellow-400 text-[16px] font-medium leading-[27px] w-[100px] h-[35px] rounded-[4px]'>
       {children}
    </button>
  )
}

export default Button
