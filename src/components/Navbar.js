import {Button } from '../components/index'
import { AiOutlineMenu} from 'react-icons/ai'
import {BsSearch,BsCart} from 'react-icons/bs';



const Navbar = () => {
    
  return (
    <nav className='p-2 sm:p-10' >
      <div className='block sm:p-5 sm:flex sm:items-center sm:justify-between'>
        <div className='sm:flex sm:items-center sm:justify-start'>
            <AiOutlineMenu className="text-2xl mx-1 text-slate-900"/>
            <h1 className='text-2xl text-bold text-slate-700'>Best Eats</h1>
            <div className='ml-1 my-2 object-contain overflow-none bg-slate-200 rounded-full inline-block py-2 relative capitalize'>
            <Button href={"#"} btnStyle={"text-sm rounded-full text-white/80  bg-black/90 p-3 "} name={"delivery"}/>
           <Button href={"#"} btnStyle={"text-sm p-2  text-slate-900 capitalize"}name={"Pickup"}/> 
            </div>
        </div>
        <div className='flex  bg-slate-200 text-2xl items-center justify-start rounded-full'>
          <BsSearch className='mx-3 text-slate-700'  />
          <input type="text" placehoder="search" className=' outline-none w-full bg-slate-200 rounded-full p-2'/>
        </div>
        <div>
        <BsCart/>
        <Button href={"#"} btnStyle={"text-6xl,text-red-500"} name={"cart"} /> 
        </div>
      </div>      
    </nav>
  )
}

export default Navbar
