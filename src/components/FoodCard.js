import React from 'react'

const FoodCard = ({image,name,price}) => {
  return (
    <div className='max-w-md pb-10 shadow-sm  shadow-orange-500/50 rounded-lg relative'>
      <div className='w-fullsm:max-w-md '>
        <img
        className='max-h-[350px] h-[250px] w-full object-cover   rounded-md'
         src={image} alt={image}/>
      </div>
      <div className='h-[18px] absolute w-full bg-white bottom-9'>
       <div className='flex w-full items-center justify-between capitalize  text-lg p-2'> 
        <p className='font-bold text-slate-900 '>{name}</p>
        <p className='bg-orange-500  text-white rounded-xl px-1'>{price}</p></div>

      </div>
    </div>
  )
}

export default FoodCard
