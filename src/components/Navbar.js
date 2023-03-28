import {Button,SideBar } from '../components/index'
import { AiOutlineMenu} from 'react-icons/ai'
import {BsSearch,BsCart} from 'react-icons/bs';
import { useContext } from "react";
import { AppContext } from "../App";

const Navbar = () => {
  const{showNav,SetShowNav} = useContext(AppContext);
  
  return (
    <nav>

      <div className='sm:w-full md:w-[80%] md:mx-auto md:p-3 flex items-center justify-between'>
        <div className='p-2 flex items-center justify-start'>
           { showNav || <AiOutlineMenu 
            onClick={() => {SetShowNav(!showNav)}}
            className="inline-block  sm:block sm:text-md text-sm md:text-2xl md:mx-1 text-slate-900"/>}
            <h1 className='min-w-0 text-[8px] text-slate-600 sm:text-sm md:text-md md:text-md'>Best <span className='text-slate-900 text-bold'>Eats</span></h1>
            <div className='hidden  ml-1 my-2 object-contain overflow-none bg-slate-200 rounded-full lg:inline-block py-2 relative capitalize'>
            <Button href={"#"} btnStyle={"text-sm rounded-full text-white/80  bg-black/90 p-3 "} name={"delivery"}/>
           <Button href={"#"} btnStyle={"text-sm p-2  text-slate-900 capitalize"}name={"Pickup"}/> 
            </div>
        </div>
        <div className='flex hover:ring hover:ring-slate-400 bg-slate-200 text-xl m-1 items-center justify-center rounded-full'>
          <BsSearch className='mx-1 sm:mx-3 text-slate-700 rounded-full'  />
          <input type="text" placehoder="search" className='outline-none w-full bg-slate-200 rounded-full sm:p-1 p-0'/>
        </div>
        <div className='hidden md:flex items-center rounded-full justify-center text-lg  bg-black/90 text-white/80 p-2'>
        <BsCart className='mx-1'/>
        <Button href={"#"} btnStyle={"capitalize text-lg"} name={"cart"}  /> 
        </div>
      </div>
      {showNav && <SideBar showNav={showNav} setShowNav={SetShowNav}/>} 
    </nav>
  )
}

export default Navbar
