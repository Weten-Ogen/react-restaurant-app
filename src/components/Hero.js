import React from 'react'

const Hero = () => {
  return (

    <div className='max-w-[1640px] mx-auto p-4 rounded-md'>
      <div className='max-h-[500px] relative'>
        <div className='absolute max-h-[500px] w-full h-full text-slate-400 bg-black/50 text-4xl capitalize flex flex-col justify-center'>
            <h1 classsName="px-3" >the <span className='text-orange-500'>best</span></h1>
            <h1 classsName="px-3">food <span className='text-orange-500'>delivered</span></h1>
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
