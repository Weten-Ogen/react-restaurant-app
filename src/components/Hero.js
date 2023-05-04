import React from 'react'

const Hero = () => {
  return (

    <div className='w-full rounded-md'>
      <div className='max-h-[400px] relative'>
        <div className='herooverlay'>
            <h1 classsName="px-3 " >the <span className='text-slate-300'>spicy</span></h1>
            <h1 classsName="px-3 my-4">& tasty <span className='text-slate-300'>delicacies</span></h1>
        </div>
        <img
        className='max-h-[400px] object-cover w-full rounded-md' 
        src='fries.jpg' 
        alt='fries'/>
      </div>
    </div>
  )
}

export default Hero
