import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";


const Header = () => {

  return (
    <div className='w-full h-auto md:flex gap-7 bg-blue-600 text-white text-sm justify-center 2xl:gap-20 py-5'>
      <div className='flex items-center gap-2'>
        <FaPhoneAlt />
        <span>+92 3455555396</span>
      </div>
      <div className='flex items-center gap-2'>
        <FaLocationDot />
        <span>Office #304-B Amna Plaza, Rawalpindi, Pakistan</span>
      </div>
      <div className='flex items-center gap-2'>
        <MdOutlineWatchLater />
        <span>Mon - Fri 8.00 - 20.00</span>
      </div>
      <div className='flex gap-3 items-center'>
        <FaFacebook />
        <IoLogoInstagram />
        <a href="">Be</a>
        <a href="">in</a>
        <AiFillYoutube />
      </div>
      <div className='flex gap-3'>
        <a href="" className='flex gap-2 items-center'><BiSolidUser /> Login | </a>
        <a href="">Register</a>
      </div>
    </div>
  )
}

export default Header
