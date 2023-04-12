import React from 'react'
import {categories} from '../data/data'

const Category = () => {
  return (
    <div className='max-w-[1640px] p-4 mx-auto'>
      <h1 
      className='foodh1'>
        top rated menu</h1>
      {/* categories */}
      <div className='categoryouterdiv'>
        {
        categories.map((item,index) =>{
            return(
            <div key={index} className='max-w-[100px] mt-4 mx-auto'>
                <h2 
                className='text-center text-slate-800 text-lg'>{item.name}</h2>
                <img
                className='catergoryImg' 
                src={item.image} 
                alt={item.name}/>
            </div> 
            )
        })
        }
      </div>

    </div>
  )
}

export default Category
