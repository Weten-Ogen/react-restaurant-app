import {SideBar } from '../components/index'
import { AiOutlineMenu} from 'react-icons/ai'
import {BsSearch, BsCart} from 'react-icons/bs';
import { useContext } from 'react';
import {AppContext} from '../App';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {nav, SetNav,handleShow} = useContext(AppContext);
  const handleClick = () => {
    SetNav(!nav);
  }

  return (
    <nav className=' mx-auto sm:p-5 relative'>
     <div className='z-10 flex items-center mx-auto sm:justify-between absolute inset-0 md:inset-10'>
        <div className='flex items-center gap-1 sm:gap-4'>
            <div className='flex items-center relative'>
              <AiOutlineMenu 
                onClick={()=> handleClick()}
              className='hamburgerMenu'/>
             <Link to='/'>
             <h1 className='hidden sm:block text-2xl capitalize text-orange-500  font-bold gap-1 cursor-pointer'>
                salina's
               
              </h1>
             </Link>
            </div>
            {/* delivery icon */}
            <div className='hidden md:flex  capitalize bg-slate-400 rounded-full  overflow-hidden'>
             
              <p 
              onClick={() => handleShow('delivery')}
              className='px-4 py-2  capitalize bg-black text-white cursor-pointer rounded-l-full rounded-r-full'>
                Delivery
              </p>
              <p 
              onClick={() => handleShow('pickup')}
              className='px-2 py-2 capitalize text-white cursor-pointer'>PickUp
              </p>
             
           </div>
        </div>
        {/* Search bar */}
       <div className='searchBar'>
        <BsSearch className='mx-1'/>
        <input 
        className='bg-slate-400 text-white outline-none px-2'
        type="text" 
        placeholder='search'  />
       </div>
       {/* Cart icon */}
       <div 
       onClick={() => {handleShow('cart')}}
       className='hidden md:flex items-center bg-black text-white rounded-full gap-1 px-4 py-2  cursor-pointer text-md'>
       <BsCart 
       
       className='text-xl  cursor-pointer'/>
        <p className='capitalize cursor-pointer'>cart</p>
       </div>
      {nav && <SideBar handleClick={handleClick}/>}
     </div>      

    </nav>
  )
}

export default Navbar
