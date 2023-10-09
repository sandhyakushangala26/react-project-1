import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
const RestroMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  //  to use custom hooks we remving it
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex]=useState(0);
  // console.log(resId);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5509643&lng=73.9168593&restaurantId=" + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };  to use custom hooks we using it

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // return resInfo===null ? (<Shimmer/>) : (
  return (
    <div className="text-center">
      {/* <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1> */}
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

  {categories.map((category,index)=>
  <RestaurantCategories key={category?.card?.card.title} data={category?.card?.card} showItems={index === showIndex ? true : false}
  setShowIndex={()=>setShowIndex(index)}
  />
  )}



      {/* <h2>Menu</h2>
      <ul>
        <li>{itemCards[0].card.info.name}</li>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestroMenu;
