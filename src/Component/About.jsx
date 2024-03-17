import React from 'react'
import Logo from '../images/vivek.png'
import Button from './Button'


const About = () => {
  return (
    <div className='bg-[#020617] w-full h-screen '>
        <div className='w-11/12 max-w-max mx-auto flex flex-row items-center gap-[80px]'>

          <div className='relative w-[475px] h-[475px] mt-[100px] '>

                <img className='absolute border-[14px] border-yellow-500 w-[490px] h-[490px] rounded-[24px] top-[25px] -left-[35px]'/>   
                <img src={Logo} alt='imageses' className=' rounded-[24px] absolute'/>  

            </div>
         

          <div className='flex flex-col w-[450px] gap-[30px] mt-16'>
            <h1 className='text-[#f3f4f6] text-[42px] leading-[64px] font-bold'>About<span className='text-yellow-500'>Me</span></h1>
            <div className='text-[#6b7280] font-[400] text-[16px] leading-[27px] flex flex-col gap-6'>
                <p>There are many variations of passages ofLorem Ipsum
                    available, but the majority havesuffered alteration in some 
                    form, by injected humour,
                </p>
                <p>Passages ofLorem Ipsumavailable, but the majority havesuffered
                     alteration in some form, by injected humour,
                </p>
            </div>
            <Button>
                Contact
            </Button>
          </div>

        </div>
    </div> 
  ) 
}

export default About
