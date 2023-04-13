import { useState } from "react";
import { data } from "../data/data";

export const useFilterType = () =>{
    const[foods,setFoods] = useState(data);

    // filtering Data by Type
    const filterType = (category) => {
        if(category === 'all'){
            setFoods(data);
        }else{
            setFoods(foods.filter(food => 
                food.category === category))
        }
    }
    // filters data by Price
    const filterPrice = (price) =>{
        setFoods(foods.filter(food => food.price === price))
    }

    
    return [foods,filterType,filterPrice];
}