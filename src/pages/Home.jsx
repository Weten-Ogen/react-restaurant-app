import { Hero,Category,Carts,Delivery,Pickup ,HeadlineCard,Food} from "../components"
import { useContext } from "react"
import { AppContext } from "../App"

const Home = () => {
  const {show} = useContext(AppContext);
  

  return (
    <div className="absolute top-0 w-full h-full mx-auto " >
      {show === 'cart' ? 
      <Carts/> :
      show === 'delivery' ? 
      <Delivery/> :
       <Pickup/>
      }
      <Hero/>
      <div className='max-w-[1640px]  mx-auto p-4 py-12 grid md:grid-cols-3 gap-4 md:gap-8'>
      <HeadlineCard para={"sun's out, bogo's out"} amount={"through 8/26"} image={'burger.jpg'}/>
      <HeadlineCard para={"new restaurant"} amount={"added daily"} image={'jollof.jpg'}/>
      <HeadlineCard para={"we deliver desserts too"} amount={"tasty treats"} image={'burger1.jpg'}/>
      </div>
      
      <Food/>
      <Category/>
      
                              
    </div>
  )
}

export default Home
