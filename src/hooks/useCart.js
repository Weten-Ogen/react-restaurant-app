import {useState} from 'react';
import { data } from '../data/data';


export const useCart = () =>{
 const[cart, setCart] = useState([]);



//  adding an item to the cart
 const addItem = (id) => {
   const item = data.find(item => item.id === id);
   if (cart.indexOf(item.name) < 0){
    setCart(prev => {
      return [...prev,item.name];
     }
     )
   }
     
   
 }

// removing an Item form the cart
 const removeItem = (id) => {
    setCart( prev => prev.filter(item => item.id !== id))
 }

 return [cart,addItem,removeItem];
}