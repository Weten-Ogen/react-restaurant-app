import React from 'react'

const Hero = () => {
  return (

    <div className='w-full rounded-md'>
      <div className='max-h-[500px] relative'>
        <div className='absolute max-h-[500px] w-full h-full text-orange-500 bg-black/50 text-2xl lg:text-6xl md:text-4xl capitalize flex flex-col justify-center pl-5'>
            <h1 classsName="px-3 " >the <span className='text-slate-300'>spicy</span></h1>
            <h1 classsName="px-3 my-4">& tasty <span className='text-slate-300'>delicacies</span></h1>
        </div>
        <img
        className='max-h-[500px] object-cover w-full rounded-md' 
        src='fries.jpg' 
        alt='fries'/>
      </div>
    </div>
  )
}

export default Hero
