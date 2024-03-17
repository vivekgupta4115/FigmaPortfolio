import React from 'react'
import PortfolioImg1 from '../userassect/Screenshot (269).png'
import PortfolioImg2 from '../userassect/Screenshot (275).png'
import PortfolioImg3 from '../userassect/Screenshot (277).png'
import PortfolioImg4 from '../userassect/Screenshot (274).png'
import PortfolioImg6 from '../userassect/istockphoto-1254993875-1024x1024.jpg'


  
const Portfolio = () => {
  return (
    <div className='bg-[#020617] w-full pt-[80px] h-fit pb-[60px]'>
        <div className='w-11/12 max-w-maxContent mx-auto flex flex-col justify-between items-center '>
            <div className='flex flex-col  w-[416px] h-[69px] gap-[24px]'>
                <h1 className='text-[42px] font-[700] leading-[64px] text-[#f3f4f6] text-center'>My<span className='text-yellow-500'>Portfolio</span></h1>
                <p className='w-[390px] text-[#9ca3af] text-center'>There are many variations of passages of Lorem Ipsum
                    available, but the majority havesuffered alteration in some 
                    form, by injected humour,
                </p>
            </div>
            
            <div className='w-[1110px] h-[565px] flex flex-row gap-[31px] mt-[160px]'>

                <div className='w-[540px] h-[565px]'>
                    <img src={PortfolioImg3} alt='portfolioPhoto' className='rounded-[12px]'/>
                </div>

                <div className='flex flex-col gap-[20px]'> 

                    <div className='flex flex-row gap-[15px] h-[268px] w-[256px]'>
                        <img src={PortfolioImg1} alt='portfolioPhoto' className='rounded-[12px]'/>
                        <img src={PortfolioImg4} alt='portfolioPhoto' className='rounded-[12px]'/>
                    </div>

                    <div className='flex flex-row gap-[15px] h-[268px] w-[256px]'>
                        <img src={PortfolioImg2} alt='portfolioPhoto' className='rounded-[12px]'/>
                        <img src={PortfolioImg6} alt='portfolioPhoto' className='rounded-[12px]'/>
                    </div>

                </div>

            </div>

        </div>

    </div>
  ) 
}

export default Portfolio
