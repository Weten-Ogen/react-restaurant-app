import {Button,SideBar } from '../components/index'
import { AiOutlineMenu} from 'react-icons/ai'
import {BsSearch, BsCart} from 'react-icons/bs';
import { useContext } from 'react';
import {AppContext} from '../App';


const Navbar = () => {
  const {nav, SetNav} = useContext(AppContext);
  const handleClick = () => {
    SetNav(!nav);
  }

  return (
    <nav className='max-w-[1024px] mx-auto'>
     <div className='flex items-center justify-between'>
        <div className='flex items-center gap-1'>
            <AiOutlineMenu 
              onClick={()=> handleClick()}
             className='text-md sm:text-lg'/>
            <h1 className='text-md capitalize text-slate-500'>
              best <span className='text-slate-800'>eats</span>
            </h1>
            <div className='hidden md:block capitalize bg-slate-400 rounded-full  overflow-hidden'>
              <Button href={"#"} btnStyle={"text-xl text-white bg-slate-800 rounded-full p-1"} name={"delivery"}/>
              <Button href={"#"} btnStyle={"text-xl rounded-full p-1 text-white capitalize"} name={"pickup"}/>
           </div>
        </div>
       <div className='flex text-md max-width-lg items-center bg-slate-400 text-white rounded-full p-1'>
        <BsSearch  className='mx-1'/>
        <input 
        className='bg-slate-400 text-white outline-none'
        type="text" 
        placeholder='search'  />
       </div>
       <div className='hidden md:flex items-center bg-black text-white rounded-full gap-1 p-1 m-1 text-md'>
       <BsCart className='text-xl '/>
       <Button href={"#"} btnStyle={"text-md capitalize"} name={"delivery"}/>
       </div>
      {nav && <SideBar handleClick={handleClick}/>}
     </div>      

    </nav>
  )
}

export default Navbar
