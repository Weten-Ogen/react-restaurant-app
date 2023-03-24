import {Button } from '../components/index'
import { AiOutlineMenu} from 'react-icons/ai'




const Navbar = () => {
    
  return (
    <nav>
     <div>
        <div>
            <AiOutlineMenu/>
        </div>
       <h1>Best Eats</h1>
       <div className=''>
        <Button href={"#"} btnStyle={"text-3xl,text-red-500"} name={"delivery"}/>
       </div>

     </div>      
    </nav>
  )
}

export default Navbar
