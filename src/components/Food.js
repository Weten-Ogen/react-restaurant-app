import { FaCartPlus } from 'react-icons/fa';
import { useFilterType } from '../hooks/useFilterType';
import { useCart } from '../hooks/useCart';


const Food = () => {
  const [foods, filterType,filterPrice] = useFilterType();
  const [cart ,addItem, removeItem] = useCart();

  return (
    <div className='p-4'>
      <h1 className='foodh1'>top rated menu items</h1>
      <div className='py-2 '>
      {/* filter by type */}
      <h3 className='py-1 text-gray-900  font-bold capitalize text-md'>filter type</h3>
        <div className='max-w-[1024px] flex flex-wrap  capitalize justify-between items-center text-orange-500'>
          <button
           onClick={()=> filterType('all')}
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
                className='border shadow-lg hover:scale-105 rounded-lg duration-300 h-[300px] w-[300px] transition ease-out relative '>
                  <div className='fooditemcover'>
                    <FaCartPlus
                    onClick={() => addItem(item.id)}
                     className='text-3xl hover:text-orange-400 text-orange-500 transform hover:scale-125
                     transition ease-out duration-100 cursor-pointer'/>
                  </div>
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
