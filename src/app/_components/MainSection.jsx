"use client"
import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { Typewriter } from 'react-simple-typewriter'

const servicesTypeWriter = [
        "Web Design",
        "Social Skills",
        "Marketing",
        "Programming",
]

const MainSection = () => {
        return (
                <div className="flex flex-col w-full xl:h-screen py-20 text-white justify-center items-center gap-5">
                        <h2 className='text-2xl xl:text-5xl  font-bold'>Learn the fundamentals with our</h2>
                        <h2 className='text-2xl xl:text-5xl font-bold'>Experts in {" "}
                                <Typewriter loop={true} words={servicesTypeWriter} />
                        </h2>
                        <p className=' sm:text-xl md:text-2xl 2xl:text-4xl my-5'>Utilize Effective Training to Reach Your Potential</p>
                        <div className='flex items-center justify-between w-[35%] h-[60px] rounded-md px-5 bg-white'>
                                <input className='w-full h-full text-black outline-none p-3 ' type="text" placeholder='Search courses..' ico />
                                <IoMdSearch size={30} style={{ color: 'lightgrey' }} />
                        </div>
                        <p className='text-xl'>Explore our more useful products</p>
                        <span className='text-2xl xl:text-5xl font-bold'>EZIBLOGS EZIPOS EZICODING</span>
                </div>
        )
}

export default MainSection
