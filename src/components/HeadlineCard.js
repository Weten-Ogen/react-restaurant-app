import React from 'react'

const HeadlineCard = ({para,amount,image}) => {
  return (
    <div className='rounded-lg relative '>
        {/*Overlay */}
        <div className='absolute rounded-lg w-full h-full text-white text-2xl  bg-black/40 px-4 '>
            <p className='capitalize pt-1 px-2 text-slate-100'>{para}</p>
            <p className='capitalize pt-1 px-2 text-slate-300'>{amount}</p>
            <button className='absolute bottom-0 px-4 py-2 bg-black/50 text-orange-500 hover:ring hover:ring-orange-500/20  rounded-md mb-4 hover:bg-black/40   capitalize'>order now</button>
        </div>
        <img className='w-full h-full object-cover rounded-lg max-h-[160px] md:max-h-[200px]' src={image} alt={image}/>
    </div>
  )
}

export default HeadlineCard
