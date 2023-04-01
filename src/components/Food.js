import Button  from './Button'
import FoodCard from './FoodCard'

const Food = () => {
  return (
    <div className='p-4'>
      <h1 className='text-orange-500 font-bold  text-2xl capitalize text-center'>top rated menu items</h1>
      <div className='py-2 '>
      <h3 className='py-1 text-gray-900  font-bold capitalize text-md'>filter type</h3>
        <div className='max-w-[1024px] flex flex-wrap  capitalize justify-between items-center text-orange-500'>
            <Button name={'all'} href={''} btnStyle={'ring ring-orange-500 rounded-2xl p-1    gap-1 m-1'}/>
            <Button name={'burger'} href={''} btnStyle={'ring ring-orange-500 rounded-2xl p-1 gap-1 m-1'}/>
            <Button name={'pizza'} href={''} btnStyle={'ring ring-orange-500 rounded-2xl p-1  gap-1 m-1'}/>
            <Button name={'salad'} href={''} btnStyle={'ring ring-orange-500 rounded-2xl p-1  gap-1 m-1'}/>
            <Button name={'chicken'} href={''} btnStyle={'ring ring-orange-500 rounded-2xl p-1    gap-1 m-1'}/>
        </div>
      </div>
      <div className='py-2'>
        <h3 className=' py-1 text-gray-900  font-bold capitalize text-md'>filter price</h3>
        <div className='max-w-[600px] flex justify-between items-center text-orange-500'>
            <Button name={'$'} href={''} btnStyle={'ring ring-orange-500 rounded-full p-1    gap-1 m-1'}/>
            <Button name={'$$'} href={''} btnStyle={'ring ring-orange-500 rounded-full p-1    gap-1 m-1'}/>
            <Button name={'$$$'} href={''} btnStyle={'ring ring-orange-500 rounded-full p-1    gap-1 m-1'}/>
            <Button name={'$$$$'} href={''} btnStyle={'ring ring-orange-500 rounded-full p-1    gap-1 m-1'}/>
        </div>
      </div>
      <div className='max-w-[1640px] my-5 mx-auto  grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8'>
      <FoodCard name={'chicken salad burger'} image={'burger.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'burger1.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'burger.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'burger.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'burger1.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'jollof.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'burger1.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'burger.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'jollof.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'fries.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'burger.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'fries.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'burger1.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'burger.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'darkburger.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'jollof.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'burger1.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'darkburger.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'burger.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'burger1.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'darkburger.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'fries.jpg'} price={50}/>
      <FoodCard name={'chicken salad burger'} image={'darkburger.jpg'} price={50}/>

      </div>
    </div>
  )
}

export default Food
