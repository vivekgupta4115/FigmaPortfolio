import React from 'react'
import Button from '../Component/Button'
import Photo from '../images/vivek.png'
import About from '../Component/About'
import Blog from '../Component/Blog'
import Contact from '../Component/Contact'
import { Link } from 'react-router-dom'
import Service from '../Component/Service'
import Portfolio from '../Component/Portfolio'

const Home = () => {
  return (
    <div>
       {/* Section 1 */}
        <div className='w-11/12 max-w-max mx-auto flex flex-flex gap-[100px] pb-[90px]'>
          
            <div className='flex flex-col mt-[200px]'>
                    <p className='text-yellow-600'>Hello, Welcome</p>

                    <h1 className='text-white text-[42px] font-bold leading-[64px] mt-[20px]'>I m Vivek Gupta</h1>

                    <p className='text-[#4b5361] w-[440px] mt-3'>There are many variations of passages ofLorem Ipsum
                            available, but the majority havesuffered alteration in some 
                            form, by injected humour,
                    </p>

                    <div className='mt-[25px]'>
                        <Button>
                            Contact us
                        </Button>
                    </div>
              </div>

                <div className='w-[427px] h-[427px] mt-[100px]'>
                    <img src={Photo} alt='image' className='rounded-[24px]'/>
                </div>
          
        </div>

            {/* Section 2 */}
            
            <Link to="/about">
               <About/>
            </Link>

            {/* Sextion 3 */}
            <Blog/>

            {/* section */}
            <Portfolio/>

            {/* Section 5 */}
            <Service/>
            
            {/* Section 4 */}
            <Contact/>

            
    </div>
  )
}

export default Home
