import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from 'next/image';

const FooterSection = () => {
    return (
        <div className='w-full h-auto bg-blue-800 p-20'>
            <div className='grid gap-9 md:grid-cols-2 xl:grid-cols-4 text-sm text-white '>
                <div>
                    <h1 className='text-xl mb-5 font-bold'>ABOUT</h1>
                    <p >Ezitech Institute provides a platform for newcomers to launch their IT and freelancing
                        careers. Our emphasis on practical information technology courses that are career and work
                        oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.
                    </p>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>POPULAR COURSES</h1>
                    <div className='flex my-5 gap-3'>
                        <Image src="/footer/charts.webp" alt='chart' height={60} width={60} />
                        <p><b>Online Arbitrage Mastermind 2.0 [R... </b><br /> By Husnain Ali</p>
                    </div>
                    <div className='flex gap-3'>
                        <Image src="/footer/ai.webp" alt='Ai' height={60} width={60} />
                        <p ><b>Adobe Illustrator Course With Proj...</b> <br /> By Ayesha Shah</p>

                    </div>
                </div>
                <div className='ml-7'>
                    <h1 className='text-xl font-bold'>PAGES</h1>
                    <ul className='flex flex-col gap-3 list-disc text-sm p-5'>
                        <li>CONTACT US</li>
                        <li>SHOP</li>
                        <li>INTERNSHIP</li>
                        <li>CODELAB</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-xl font-bold'>CONTACT</h1>
                    <div className='flex gap-3'>
                        <FaLocationDot size={25} style={{ color: 'blue' }} />
                        <p>Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</p>
                    </div>
                    <div className='flex gap-3'>
                        <FaPhoneAlt size={20} style={{ color: 'blue' }} />
                        <p>+923455555396</p>
                    </div>
                    <div className='flex gap-3'>
                        <MdEmail size={20} style={{ color: 'blue' }} />
                        <p>info@ezitech.org</p>
                    </div>
                </div>
            </div>
            <div className='text-center text-sm mt-20'>
                <p className='block text-white'> Copyright © 2024 Ezitech Institute | Design & Develop by <a href="" className='border-b hover:border-blue-600 hover:text-blue-600'>Eziline Software House</a></p>
            </div>
        </div>
    )
}

export default FooterSection
