//naming the file name starting with use will make reactknow its a custom hook
import { MENU_URL } from "../utils/constants";

import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
//fetch data here
const [resInfo,setResInfo]=useState(null);

useEffect(()=>{
    fetchData();
},[]);


const fetchData=async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5509643&lng=73.9168593&restaurantId="+resId);
    const json=await data.json();
    console.log(json)
    setResInfo(json.data);
}

  return resInfo;
};


export default useRestaurantMenu;