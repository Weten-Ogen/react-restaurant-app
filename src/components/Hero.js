import React from 'react'

const Hero = () => {
  return (
    <div className='relative max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
          <div className='max-h-[500px] bg-black/40 absolute w-full h-full text-white/80 capitalize flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-7xl'>the 
            <span className='text-orange-500 px-2'>best</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-7xl'>foods <span className='text-orange-500 px-2'>delivered</span></h1></div>
          <img 
          className='max-h-[500px] w-full object-cover'
          src="burger.jpg" 
          alt="hero_image"/>
        </div>
        
    </div>
  )
}

export default Hero
