import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#020617] py-4'>
        <div className='w-11/12 max-w-maxContent flex flex-row justify-center items-center mx-auto'>

            <h1 className='text-white pr-[480px] text-[24px] leading-[30px] font-bold pl-[50px]'>About<span className='text-yellow-500'>Me.</span></h1>  
        
            <nav className=''>
                <ul className='text-white flex flex-row gap-x-5 pr-[60px]'>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                      <NavLink to="/service">Service</NavLink>
                    </li>  
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>   
                </ul>
            </nav>

        </div>
    </div>
  )
}

export default Navbar
