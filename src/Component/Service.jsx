import React from 'react'
import { FaProjectDiagram } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { TbDeviceHeartMonitorFilled } from "react-icons/tb";

const Service = () => {

    const card = [
        {
            icon:<AiFillSound/>,
            heading:"Digital Marketing",
            description:"There are many variations of passages of Lorem Ipsum  available, but the majority have suffered alteration in some",
        },
        {
            icon:<TbDeviceHeartMonitorFilled/>,
            heading:"Web Devlopment",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some",
        },
        {
            icon:<FaProjectDiagram/>,
            heading:"Creative",
            heading2:"Graphic Design",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some11",
        }
    ]

  return (
    <div>
         <div className='w-11/12 max-w-maxContent mx-auto flex flex-col mt-[60px] mb-[40px]'>

            <div className='w-[730px] h-[142px] pl-[90px]'>
                <h1 className='text-[#f3f4f6] text-[42px] font-[700] leading-[64px]'>My<span className='text-yellow-500'>Service</span></h1>
                <p className='text-[#9ca3af] text-[16px] font-[400] leading-[27px] w-[740px] mt-5'>There are many variations of passages of Lorem Ipsum </p>
                <p className='text-[#9ca3af] text-[16px] font-[400] leading-[27px] w-[740px]'> available, but the majority havesuffered alteration in some<br/> form, by injected humour,</p>
            </div>

        <div className='w-[1126px] pl-[90px] mt-[60px] '>
            <div className='text-[#f3f4f6] grid mx-auto w-[360px] h-[330px] xl:w-fit grid-cols-1 xl:grid-cols-3 gap-8 rounded-lg '>
                {
                        card.map((data, index) => {  
                            return (
                                <div key={index} className='bg-[#020617] h-[300px] p-[30px] rounded-[12px] flex flex-col justify-center items-center pb-[50px]'>
                                    <p className='text-[30px] font-[400] leading-[27px] flex justify-center items-center text-yellow-500'>{data.icon}</p>
                                    <h1 className='text-[26px] font-[700] leading-[41px] text-[#f3f4f6] text-center w-[130px] pt-4'>{data.heading}</h1>
                                    <p className='text-[26px] font-[700] leading-[41px] text-[#f3f4f6] text-center w-[260px]'>{data.heading2}</p>
                                    <p className='text-[#6b7280] font-[400] text-[16px] leading-[27px] pt-4 pl-[30px]'>{data.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
