import images_jnp from '@/../public/President-of-pakistan-259x299.png'
import Image from 'next/image'
import React from 'react'

const ServicesAward = () => {
    return (
        <div className='w-full p-7'>
            <h1 className='text-4xl 2xl:text-3xl text-center mt-16 font-bold'>Best IT Services Award 2023</h1>
            <div className=' md:flex justify-center gap-9 p-7'>
                <Image src={images_jnp} alt='images' width={400} height={400}/>
                <div className='flex md:w-[600px] h-auto flex-col gap-5 justify-between text-sms text-[#968ea3]'>
                    <p>
                        <b className='text-black'>Ezitech Is affiliated With</b> <a className='text-blue-700' href="">Eziline Software House</a>. Eziline has been awarded the prestigious Best Software House in IT sector
                        award by the President of Pakistan. This is an incredible achievement and a testament to the hard work and
                        dedication of the entire team at Eziline Software House. The award is a great recognition of the company’s achievements in the field
                        of IT and serves as a major milestone in its journey towards success.
                    </p>
                    <p>
                        This award is a huge source of motivation and inspiration for the entire team at Eziline Software
                        House. <b className='text-black'>It is a validation of the company’s commitment to innovation, excellence, and customer satisfaction</b>.
                        The award acknowledges the hard work and dedication of every member of the team who has contributed to the success of the company.
                    </p>
                    <p>
                        <b className='text-black'>Ismail Shah, the CEO of Eziline Software House Pvt Ltd</b>, received the
                        Best Services Award in the IT sector from the <b className='text-black'>President of Pakistan,
                        Dr. Arif Alvi</b>, in recognition of his remarkable contributions to the country’s technology industry.
                    </p>

                    <button className='w-[150px] h-[40px] hover:bg-blue-400 text-white rounded-md bg-blue-500'>Eziline Profile</button>
                </div>
            </div>

        </div>
    )
}

export default ServicesAward
