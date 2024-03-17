import React from 'react'
import { useForm } from 'react-hook-form';
import Button from './Button';
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { CiYoutube } from "react-icons/ci";
import { LuTwitter } from "react-icons/lu";

const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: { errors},
      } = useForm()
    

  return (
    <div className='bg-[#020617]'>
        <div className='w-[1110px] max-w-maxContent mx-auto '>
            <div className='text-white flex flex-col justify-center items-center pt-[50px]'>
                <h1 className=' text-[42px] font-[700] leading-[64px]'>Contact<span className='text-yellow-500'>Me</span></h1>
                <div className='text-[16px] font-[400] leading-[27px] text-[#9ca3af] mt-[24px]'>
                    <p className=''>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                    <p className='pl-[75px]'>havesuffered alteration in some form, by injected humour,</p>
                </div>
            </div>

            <div className='flex flex-row gap-[180px] mt-16'> 

                 <div className='w-[142px]flex flex-col pt-[70px] text-[16px] font-[400] leading-[41px] gap-[16px] text-[#f3f4f6]'>
                    <p><span className="text-yellow-500 font-[500]">Address _ </span>23 S 80 Road, Benedict,ne, 68316<br/> United States</p>
                    <p><span className="text-yellow-500 font-[500]">Phone_</span>+01 123 456 789</p>
                    <p><span className="text-yellow-500 font-[500]">Phone_</span>abc.xyz@gmail.com</p>
                    <p><span className="text-yellow-500 font-[500]">Website_</span>www.abc.xyz.com</p>
                 </div>

                 <form onSubmit={handleSubmit} className='flex flex-col'>
                    <div>
                        <label htmlFor="firstname" className="text-[#f3f4f6]">
                            First Name<sup className='text-red-600'>*</sup>
                        </label>
                        <br/>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="Enter first name"
                            className="bg-[#1f2937] mt-3 w-[350px] h-[40px] pl-3"
                            {...register("firstname", { required: true })}
                        />
                        {errors.firstname && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                            Please enter your name.
                            </span>
                        )}       
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="mt-11 text-[#f3f4f6]">
                             Message<sup className='text-red-600'>*</sup>
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="7"
                            placeholder="Enter your message here"
                            className="bg-[#1f2937] w-[500px] h-[140px] pl-3 mt2"
                            {...register("message", { required: true })}
                        />
                        {errors.message && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            Please enter your Message.
                        </span>
                        )}
                    </div>

                    <div className='mt-[30px]'>
                        <Button>
                            Contact us
                        </Button>
                    </div>
                 </form>
            </div>

            <div className='w-[685] h-[320px]flex flex-col text-white mt-20 '>
                <div className='flex flex-col justify-center items-center mx-auto'>
                    <h1 className='text-[40px] leading-[50px] font-[700]'>AboutMe</h1>
                    <p className='text-[16px] leading-[27px] font-[400] text-[#9ca3af] mt-6'>There are many variations of passages ofLorem Ipsumavailable, but the majority</p>
                    <p className='text-[16px] leading-[27px] font-[400] text-[#9ca3af]'> havesuffered alteration in some form,</p>
                </div>
                <div className='flex flex-row gap-[16px] items-center justify-center pt-12 pb-10 text-2xl cursor-pointer'>
                    <FaInstagram className='hover:text-yellow-500'/>
                    <AiOutlineLinkedin className='hover:text-yellow-500'/>
                    <CiYoutube className='hover:text-yellow-500'/>
                    <LuTwitter className='hover:text-yellow-500'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact
