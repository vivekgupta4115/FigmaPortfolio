import React from 'react'

const card = [
    {
        title:"June-2002 - 2020",
        heading:"UX/UI Designer",
        title1:"Figma",
        description:"There are many variations of passages of Lorem Ipsumav ailable, but the majority have suffered alteration in some",
    },
    {
        title:"June-2002 - 2020",
        heading:"Product Designer",
        title1:"Adobe Photoshop",
        description:"There are many variations of passages of Lorem Ipsumav ailable, but the majority have suffered alteration in some",
    },
    {
        title:"June-2002 - 2020",
        heading:"Graphic Designer",
        title1:"Adobe Photoshop",
        description:"There are many variations of passages of Lorem Ipsumav ailable, but the majority have suffered alteration in some11",
    }
]

const Blog = () => {
  return (
    <>
        <div className='w-11/12 max-w-maxContent mx-auto flex flex-col mt-[60px] mb-[60px]'>

            <div className='w-[730px] h-[142px] pl-[90px]'>
                <h1 className='text-[#f3f4f6] text-[42px] font-[700] leading-[64px]'>My<span className='text-yellow-500'>Experiences</span></h1>
                <p className='text-[#9ca3af] text-[16px] font-[400] leading-[27px] w-[740px] mt-5'>There are many variations of passages of Lorem Ipsum </p>
                <p className='text-[#9ca3af] text-[16px] font-[400] leading-[27px] w-[740px]'> available, but the majority havesuffered alteration in some form, by injected humour,</p>
            </div>

           <div className='w-[1126px] pl-[90px] mt-[60px] '>
                 <div className='text-[#f3f4f6] mx-auto w-[360px] h-[330px] grid  xl:w-fit grid-cols-1 xl:grid-cols-3 gap-8 rounded-lg '>
                     {
                            card.map((data, index) => {  
                                return (
                                    <div key={index} className='bg-[#020617] h-[300px] p-[30px] rounded-[12px]'>
                                        <p className='text-[#d1d5db] text-[20px] font-[400] leading-[27px]'>{data.title}</p>
                                        <h1 className='text-[26px] font-[700] leading-[41px] text-yellow-500 pt-[10px]'>{data.heading}</h1>
                                        <p className='font-[400] text-[16px] leading-[27px]'>{data.title1}</p>
                                        <p className='text-[#6b7280] font-[400] text-[16px] leading-[27px] text-center pt-[10px]'>{data.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
           </div>
        </div>
    </>
  )
}

export default Blog
