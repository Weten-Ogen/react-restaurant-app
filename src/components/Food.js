import { useState } from 'react';
import { data } from '../data/data';


const Food = () => {

  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(data.filter(item => {
      return item.category === category;
    }))
  };

  const filterPrice = (price) => {
    setFoods(data.filter(item => {
      return item.price === price;
    }))
  };

  
  

  


  return (
    <div className='p-4'>
      <h1 className='foodh1'>top rated menu items</h1>
      <div className='py-2 '>
      {/* filter by type */}
      <h3 className='py-1 text-gray-900  font-bold capitalize text-md'>filter type</h3>
        <div className='max-w-[1024px] flex flex-wrap  capitalize justify-between items-center text-orange-500'>
          <button
           onClick={()=>setFoods(data)}
           className='foodnav'>
            all
          </button>
          <button
           onClick={()=>filterType('burger')}
           className='foodnav'>
            burger
          </button>
           <button
           onClick={()=>filterType('pizza')}
           className='foodnav'>
            pizza
          </button>
           <button
            onClick={()=>filterType('salad')}
           className='foodnav'>
            salad
          </button> 
          <button
           onClick={()=>filterType('chicken')}
           className='foodnav'>
            chicken
          </button> 
        </div>
      </div>

  {/* filter by prices */}
      <div className='py-2'>
        
        <h3 className=' py-1 text-gray-900  font-bold capitalize text-md'>filter price</h3>
        
        <div className='max-w-[600px] flex justify-between items-center text-orange-500'>
          <button
          onClick={()=> filterPrice('$')}
          className='foodnav'>
            $
          </button> 
          <button
          onClick={()=> filterPrice('$$')}
          className='foodnav'>
            $$
          </button>
          <button
          onClick={()=> filterPrice('$$$')}
          className='foodnav'>
            $$$
          </button> 
          <button
          onClick={()=> filterPrice('$$$$')}
          className='foodnav'>
            $$$$
          </button>
         
        </div>
      </div>
      {/* DISPLAYING FOOD */}
      <div className='foodouterdiv'>
        {
          foods.map((item,index) => {
            return(
                <div key={index}  
                className='border mx-auto shadow-lg hover:scale-105 rounded-lg duration-300 transition ease-out'>
                  <img  
                  className='w-full h-[200px] object-cover rounded-t-lg '
                  src={item.image} 
                  alt={item.name}/>
                  <div className='flex items-center justify-between px-2 py-4'>
                    <p className='text-2xl text-slate-800 font-bold'>{item.name}</p>
                    <p className='bg-orange-500 rounded-full '>
                      <span className='text-xl  text-white p-1'>{item.price}</span>
                    </p>
                  </div>

                </div>
              )
          }
          )
        }

      </div>
    </div>
  )
}

export default Food
