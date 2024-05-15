import React from 'react'
import Image from 'next/image'

const items = [
    {
        image: "./how-it-works/sign-up.svg",
        title: "Sign up",
        description: "Enter your name, email, and contact details to get started. It truly is that simple!",
    },
    {
        image: "./how-it-works/course.svg",
        title: "Select course",
        description: "Browse our extensive and ever-expanding variety of courses for professional development.",
    },
    {
        image: "./how-it-works/learning.svg",
        title: "Start Learning",
        description: "Do the tasks, and your teacher will evaluate them before providing you with thorough",
    }

]

const HowItWorks = () => {

    return (
        <div className='flex flex-col items-center w-full p-9'>
            <h1 className='text-2xl md:text-4xl text-center mb-7'>How it works?</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {items?.map((item, index) => (
                    <div key={index} className='flex xl:w-[350px] h-[400px] flex-col gap-5 items-center '>
                        <Image src={item.image} alt={item.title} width={250} height={200} />
                        <span className='text-2xl'>{item.title}</span>
                        <p className='text-center text-xs text-[#968ea3]'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HowItWorks
