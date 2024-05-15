
import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import Image from 'next/image';





const course = [
    {
        image: "/recommended-courses/flutter-development.jpg",
        name: 'IOS & AND',
        description: 'Flutter & Dart - The Complete Course With Projects',
        an: 8226,
        price: '37,000',
    }, {
        image: "/recommended-courses/flutter-development.jpg",
        name: 'Designing',
        description: 'Adobe lllustrator Course With Projects',
        an: 7528,
        price: '35,000',
    }, {
        image: "/recommended-courses/flutter-development.jpg",
        name: 'Amazon',
        description: 'Online Arbitrage Mastermind 2.0 [Resell Products from Home]',
        an: 7416,
        price: '34,000'
    }, {
        image: "/recommended-courses/flutter-development.jpg",
        name: 'Development',
        description: 'Front-End Course With Projects',
        an: 5411,
        price: '18,000'
    }, {
        image: "/recommended-courses/flutter-development.jpg",
        name: 'Designinges',
        description: 'Adobe Photoshop Course',
        an: 7416,
        price: '15,000'
    },
]

const RecommendedCourses = () => {

    return (
        <div className='w-full h-auto flex flex-col px-5 items-center'>
            <h1 className='text-2xl md:text-4xl font-bold my-9'>Recommended Courses</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16'>
                {course.map((item, key) =>
                    <div key={key} className='w-[250px] h-full flex flex-col items-center  overflow-hidden my-5 transform hover:scale-105 transition-all'>
                        <Image src={item.image} alt='image' width={300} height={80} />
                        <div className='px-3'>
                            <h3 className='text-sm my-4'>{item.name}</h3>
                            <p className='text-sm' >{item.description}</p>
                            <div className='flex justify-between bg-blue-100 my-3 p-2 rounded-md'>
                                <span className='flex items-center text-sm gap-1'><MdOutlineWatchLater />Months</span>
                                <span className='flex items-center text-sm gap-1'> <AiOutlineEye />{item.an}</span>
                            </div>
                            <hr />
                            <div className='flex justify-between my-3'>
                                <span>0.0</span>
                                <span>PKR{item.price}</span>
                            </div>
                            <button className='w-full h-[40px] rounded-sm text-white hover:bg-blue-300 bg-blue-500'>Preview this course</button>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default RecommendedCourses
