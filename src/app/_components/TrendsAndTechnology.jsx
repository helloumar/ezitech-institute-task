import Image from 'next/image'
import React from 'react'
const technology = [
    {
        image: "/artificial-intelligence.png",
        name: 'ML & AI'
    }, {
        image: "/blockchain.png",
        name: 'Block Chain'
    }, {
        image: "/amazon.png",
        name: 'Amazon'
    }, {
        image: "/cyber-security.png",
        name: 'Cyber Security'
    }, {
        image: "/development.png",
        name: 'Development'
    }, {
        image: "/designing.png",
        name: 'Designing'
    }, {
        image: "/gaming.png",
        name: 'Gaming'
    }, {
        image: "/architecture.png",
        name: 'Architecture'
    }, {
        image: "/IOS&AND.png",
        name: 'IOS & AND'
    }, {
        image: "/social-media.png",
        name: 'Marking'
    }, {
        image: "/3d.png",
        name: '3D'
    }, {
        image: "/animation.png",
        name: 'Animation'
    },
]




const TrendsAndTechnology = () => {
    return (
        <div className='w-full flex flex-col items-center my-9'>
            <h1 className='text-3xl text-center'>What new trends and technology will <br />you discover?</h1>
            <p className='text-center text-md my-9'>Todays technology is developing quickly, and our new technological trends are enabling and advancing, <br /> speeding up the pace of development.</p>
            <div className='grid gap-7 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6  2xl:grid-cols-6'>
                {technology.map((item, key) =>
                    <div key={key} className='w-[160px] h-[180px]  flex flex-col 2xl:w-[220px] shadow-xl gap-3 items-center justify-center rounded-xl transform hover:scale-110 transition-transform'>
                        <Image src={item?.image} alt='image' width={80} height={80} />
                        <span>{item.name}</span>
                    </div>)}
            </div>
        </div>
    )
}

export default TrendsAndTechnology
