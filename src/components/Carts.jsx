import React from 'react'
import { useCart } from '../hooks/useCart';
import { AppContext } from '../App';
import { useContext } from 'react';

const Carts = () => {
  const [cart,removeItem] = useCart();
  const {handleShow} = useContext(AppContext);
  console.log(cart)
  

  

  return (
    <div className='w-full z-10 h-screen absolute bg-black/80'>
      <div className='p-20 '>
        <div className='max-w-lg w-[500px] h-[540px] 
        bg-gray-200 mx-auto rounded-md shadow-lg-gray-400  p-2'>
          <h1 className='text-3xl font-bold text-center text-orange-500 backdrop-blur-3 transform -skew-x-12 '>Cart</h1>
          {
            cart.length  ? 
            (<div className='p-2 my-3 text-lg '>
           item exist
          </div>):( 
          <div className='relative h-[400px]'>
            <p className='cartNoItemDiv'>
              <span className='text-orange-500 pr-1 text-4xl'>
                !</span>
              no item in your cart
            </p>
            <div className='absolute bottom-0 mx-auto w-full cursor-pointer'>
             
              
              <button
                onClick={()=> handleShow('/')}
                className='cartbtn'>cancel
              </button>
          </div>
          </div>
        )
        }
        </div>
      </div>
    </div>
  )
}

export default Carts
