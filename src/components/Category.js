import React from 'react'
import {categories} from '../data/data'
import {FaCopyright } from 'react-icons/fa';

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
      <div className='pt-4 px-4   mx-auto  mt-5'>
        <p className='footer'>
          <span className='text-orange-400 '>
            <FaCopyright/>
          </span>
          <p  className='text-lg '>
            built and maintained by  
            <span className='mx-2 inline-block '>Weten Ogen</span>
          </p>

        </p>
      </div>
    </div>
  )
}

export default Category
