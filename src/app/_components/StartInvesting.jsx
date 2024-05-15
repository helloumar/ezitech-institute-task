import Image from 'next/image'
import React from 'react'

const StartInvesting = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center bg-blue-800 p-9'>
        <h1 className='text-4xl text-center my-9 text-white font-bold'>It’s time to <span className='text-blue-400'>start</span> investing in <br /> yourself</h1>
        <Image src="/inter-images/screenImage.webp" alt='screen' width={1500} height={1000} />
    </div>
  )
}

export default StartInvesting
