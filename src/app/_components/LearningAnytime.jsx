import React from 'react'
import { GrApple } from "react-icons/gr";
import { SiGoogleplay } from "react-icons/si";
import Image from 'next/image';



const LearningAnytime = () => {
    return (
        <div className=' md:flex w-full h-auto justify-center my-7 gap-7'>
                <Image src="/inter-images/phone-copy.webp"
                    alt="Phone"
                    width={400}
                    height={600}
                    className="transition-transform transform hover:-translate-x-7 hover:cursor-move hover:-translate-y-9"
                />
            <div className='sm:[300px] lg:w-[500px] h-auto flex flex-col p-5 justify-center'>
                <h1 className='text-5xl my-7 font-bold'>Learning <span className='text-blue-500'>anytime</span><br /> from anywhere</h1>
                <p className='text-xl'>
                    Increase the mobility level with Eziline Technologies LMS App. Take your course in your pocket and
                    access them whenever you want without any limits . Make your learning more engaging and productive using modern LMS app.
                </p>
                <div className='flex gap-5 my-9'>
                    <div className='flex gap-3 items-center w-[200px] h-[60px] rounded-xl p-5 bg-black text-white'>
                        <GrApple size={40} />
                        <p className='text-sm'>Download on the coming soon</p>
                    </div>
                    <div className='flex gap-3 items-center w-[200px] h-[60px] rounded-xl p-5 bg-black text-white'>
                        <SiGoogleplay size={40} />
                        <p className='text-xs'>GET IT ON <span className='text-xl'> Google Play</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearningAnytime
