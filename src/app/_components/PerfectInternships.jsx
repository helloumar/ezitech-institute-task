import React from 'react'
import { BiSolidUser } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import Image from 'next/image';


const interItems = [
    {
        name: 'HTML/CSS Javascript',
        image: '/inter-images/web-design.png',
    }, {
        name: 'GRAPHIC DESIGNING',
        image: '/inter-images/development.png',
    }, {
        name: 'DIGITAL MARKETING',
        image: '/inter-images/digital-marketing.png',
    }, {
        name: 'FLUTTER DEVELOPMENT',
        image: '/inter-images/app-development.png',
    }, {
        name: 'MACHINE LEARNING',
        image: '/inter-images/web-services.png',
    }, {
        name: 'MERN Development',
        image: '/inter-images/clean-code.png',
    }
]

const PerfectInternships = () => {
    return (
        <div className='w-full h-auto flex flex-col my-16 items-center'>
            <h1 className='text-2xl md:text-4xl font-bold my-20'>Perfect Internships For You</h1>
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-3'>
                {interItems.map((item, key) => <div key={key} className='w-[340px] h-[360px]  md:w-[380px] md:h-[400px] shadow-lg rounded-2xl transform hover:scale-105 transition-transform'>
                    <div className='flex justify-between items-center h-[120px] p-10 bg-blue-800 rounded-t-2xl'>
                        <div className='text-white'>
                            <h1 className='w-[150px] text-xl font-bold'>{item.name}</h1>
                            <hr className='w-[140px] my-2' />
                            <span>Ezitech Institute</span>
                        </div>
                        <Image src={item.image} alt='image' width={80} height={50} />
                    </div>
                    <div className='flex flex-col gap-5 p-10'>
                        <span className='flex items-center gap-3 text-sm md:text-md'><BiSolidUser className='text-[#042d89] ' />Employment - <span className='p-1 rounded-md bg-[#f0f7f4]' >Hybrid</span></span>
                        <span className='flex items-center gap-3 text-sm md:text-md'><FaLocationArrow className='text-[#042d89] '/>Location - <span className='p-1 rounded-md bg-[#f0f7f4]' >Rawalpindi</span></span>
                        <span className='flex items-center gap-3 text-sm md:text-md'><FaBagShopping className='text-[#042d89] '/>Job Type - <span className='p-1 rounded-md bg-[#f0f7f4]' >Full Time Part Time</span></span>
                    </div>
                    <div className='flex justify-center my-5'>
                        <button className='flex items-center justify-center p-3 w-[150px] h-[40px] text-white rounded-md bg-blue-600'>Read More</button>
                    </div>
                </div>)}
            </div>
            <div className='flex justify-center my-7'>
                <button className='flex items-center justify-center md:w-[150px] h-[40px] p-3 text-md text-white rounded-md bg-blue-600'>Read More</button>
            </div>
        </div>
    )
}

export default PerfectInternships
