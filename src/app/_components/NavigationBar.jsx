'use client'
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Link from 'next/link';

const navItems = [
    {
        name: "HOME",
        link: ""
    }, {
        name: "ABOUT US",
        link: ""
    }, {
        name: "CERTIFICATIONS",
        link: ""
    }, {
        name: "INTERNSHIPS",
        link: ""
    }, {
        name: "SEMINARS",
        link: ""
    },
]


const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);


    return (
        <div className='flex w-full h-auto justify-between items-center p-5 text-white  border-b'>
            <div>
                <h1 className='text-md md:text-4xl font-bold'>EZITECH</h1>
                <span className='text-sm'>LEARNING INSTITUTE</span>
            </div>
            <div className='hidden sm:flex gap-5  font-bold'>{navItems?.map((item,index) =>
                <Link key={index} href="" className='transition hover:text-blue-500 focus:text-blue-500 focus:border-b-2 focus:border-blue-500'>{item.name}</Link>
            )}
            </div>
            <div className='flex gap-3 items-center'>
                <a href="" className='flex items-center justify-center w-[60px] h-[50px] rounded-full hover:bg-green-500' ><FaRegHeart size={20} /></a>
                <a href="" className='w-[40px] h-[40px] p-2 hover:bg-blue-800 hover:border-blue-950 transition-all border-2'><IoSearch size={20} /></a>
            </div>
            <div className='sm:hidden'>
                <button onClick={toggleMenu} className='text-white'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path></svg>
                </button>
            </div>
            {isOpen && (
                <div className='fixed inset-0 flex text-black items-center justify-center bg-blue-900 bg-opacity-90'>
                    <div className='bg-white p-5 rounded'>
                        <a href="" className='block mb-3'>HOME</a>
                        <a href="" className='block mb-3'>ABOUT US</a>
                        <a href="" className='block mb-3'>CERTIFICATIONS</a>
                        <a href="" className='block mb-3'>INTERNSHIPS</a>
                        <a href="" className='block'>SEMINARS</a>
                    </div>
                </div>)}

        </div>
    );
}

export default NavigationBar
