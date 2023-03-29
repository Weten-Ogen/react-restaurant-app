import {AiOutlineClose,AiFillTag} from "react-icons/ai"
import NavList from "./NavList"
import {FaWallet,FaUserFriends} from "react-icons/fa"
import {MdHelp,MdFavorite} from "react-icons/md"
import {BsFillSaveFill} from "react-icons/bs"
import {TbTruckDelivery} from "react-icons/tb"



const SideBar = ({handleClick}) => {
  return (
    <nav className="h-screen top-0 z-10 fixed left-0 w-full md:w-[30%] bg-slate-400 text-2xl text-white"  >
     <div className="flex items-center  gap-2 relative justify-around  m-3"> 
      <h1>
        best <span>eats</span>
      </h1>
      <AiOutlineClose onClick={() =>{handleClick()}}/>
      </div>
      <div className="m-7 capitalize">
        <NavList element={<MdFavorite/>} text={"favorites"}/>
        <NavList element={<TbTruckDelivery/>} text={"orders"}/>
        <NavList element={<FaWallet/>} text={"wallet"}/>
        <NavList element={<MdHelp/>} text={"help"}/>
        <NavList element={<AiFillTag/>} text={"promotion"}/>
        <NavList element={<BsFillSaveFill/>} text={"best ones"}/>
        <NavList element={<FaUserFriends/>} text={"invite friends"}/>
      </div>
    </nav>
  )
}

export default SideBar
