import {useState} from 'react';
import { data } from '../data/data';


export const useCart = () =>{
 const[cart, setCart] = useState([]);

//  adding an item to the cart
 const addItem = (id) => {
   const item = data.find(item => item.id === id);
   setCart(prev => prev.push(item));
 }

// removing an Item form the cart
 const removeItem = (id) => {
    setCart( prev => prev.filter(item => item.id !== id))
 }

 return [cart,addItem,removeItem];
}