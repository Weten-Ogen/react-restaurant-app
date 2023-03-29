import { AiOutlineClose,AiFillTag} from "react-icons/ai"
import NavList from "./NavList";
import {TbTruckDelivery} from 'react-icons/tb';
import {MdFavorite,MdHelp}  from 'react-icons/md';
import {FaUserFriends, FaWallet} from 'react-icons/fa';
import {BsFillSaveFill} from 'react-icons/bs';
import { useContext } from "react";
import { AppContext } from "../App";

const SideBar = () => {
  const{showNav,SetShowNav} = useContext(AppContext);
  return (
    <div className='fixed w-full md:w-[30%] z-10 bg-black h-screen  top-0  left-0 text-white cursor-pointer '>
      <AiOutlineClose className="absolute right-4 text-2xl m-5 " onClick={() => SetShowNav(!showNav)}/>
      <h1 className="text-xl capitalize  m-5 text-white/50">best <span className="text-bold  text-white/80">eats</span></h1>
      <div className="m-5 capitalize" >
      <NavList element={<TbTruckDelivery/>} text={"orders"}/>
      <NavList element={<MdFavorite/>} text={"favorites"}/>
      <NavList element={<FaWallet/>} text={"wallet"}/>
      <NavList element={<MdHelp/>} text={"help"}/>
      <NavList element={<AiFillTag/>} text={"promotion"}/>
      <NavList element={<BsFillSaveFill/>} text={"orders"}/>
      <NavList element={<FaUserFriends/>} text={"orders"}/>
      </div>

    </div>
  )
}

export default SideBar
