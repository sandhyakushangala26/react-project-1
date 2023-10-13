import Card,{withPromotedLabel} from "./Card";
// import { useEffect, useState } from "react";
// import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
//ep05 it is not good to keep the hardcoded data into our component file. so we should keep in another file like utils.js,consts.js,config.js
//we  are writing this listOfRestaurants hardcode data in this file itself, just to implement the filter and hooks.
/*now react hook is a noraml javascript function given by react to us,it is prebuilt the only thing is the function comes with super powers,it has some logic return behinfd the scenes,it is utility function given to us .We did npm react in the beginning through whichwe all the utility functions .How to use these hooks? we need to impoort them .There are 2 important hooks in react they are
-useState()=> it is used to give superpowerful useState variables . we need to import it from React and it is named import .THis is coming from react package in nodemodules.Now useState is used to create a state variable becuse it maintains the state of the component.Now the local state variable scope is inside that component .
-useEffect()*/
const Body = () => {
  //how to createa state variable
  // const [listOfRestauants, setListOfRestaunts] = useState([
  //     {
  //         "data" : {
  //             "id":0,
  //             "resName": "MCD",
  //             "cuisine":"Burger",
  //             "image": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //             "avgRating":3.6,
  //         }
  //     },
  //     {
  //         "data" : {
  //             "id":1,
  //             "resName": "Haldirams",
  //             "cuisine":"",
  //             "image": "2f849d999918d411532dd1e8c24f29e0",
  //             "avgRating":4.1,
  //         }
  //     },
  //     {
  //         "data" : {
  //             "id":2,
  //             "resName": "Dominos",
  //             "cuisine":"Burger",
  //             "image": "aadw5xxrjtv6xxhtscai",
  //             "avgRating":4.8,
  //         }
  //     },
  //     {
  //         "data" : {
  //             "id":3,
  //             "resName": "CCD",
  //             "cuisine":"Burger",
  //             "image": "d96267738c19ec62acb5390e52faba41",
  //             "avgRating":3.8,
  //         }
  //     }
  // ]); before
  //here the useState function will give us the state and we will recieve the that state inside the array and give our variable i.e listOfRestauants inside that array .it is same as let listOfRestauants=[];with more powers.Then watever we pass inside the useState([]) it will become the default value to our variable.And wee use this listOfRestauants variables else where normally.
  // now the second argument i.e setListOfRestauants which  is a function name  to update the list of restauants the usual namimg of this function is array list name i.e listOfRestauants in our case i.e 1 argument prefixed with sett keyword.
  //whenever the state variable changes react will rerender the component.
  // let listOfRestauantsJs = [
  //     {
  //         "data" : {
  //             "id":0,
  //             "resName": "MCD",
  //             "cuisine":"Burger",
  //             "image": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //             "avgRating":3.6,
  //         }
  //     },
  //     {
  //         "data" : {
  //             "id":1,
  //             "resName": "Haldirams",
  //             "cuisine":"",
  //             "image": "2f849d999918d411532dd1e8c24f29e0",
  //             "avgRating":4.1,
  //         }
  //     },
  //     {
  //         "data" : {
  //             "id":2,
  //             "resName": "Dominos",
  //             "cuisine":"Burger",
  //             "image": "aadw5xxrjtv6xxhtscai",
  //             "avgRating":4.8,
  //         }
  //     },
  //     {
  //         "data" : {
  //             "id":3,
  //             "resName": "CCD",
  //             "cuisine":"Burger",
  //             "image": "d96267738c19ec62acb5390e52faba41",
  //             "avgRating":3.8,
  //         }
  //     }
  // ]
  // we can use mock data in useState as show below
  // const [listOfRestauants, setListOfRestaunts] = useState(resList); //ep05
  const [listOfRestauants, setListOfRestaunts] = useState([]); //ep06
  //this is array destructioningie const listOfRestaunants=arr[0], const setListOfRest=arr[1];
  // SEE WAT DOES USESTATE RETURN TO U?
  //ep06: part 06 we make this useState because on click on search we get filtered restaurants which is updating the listofRestaunants and we are loosing all the restaurants and getting only filtered restaurant so the next time we search any restaurant we are not getting anything so we create this variable
  const [filteredRestaurant, setFilteredrestaurant] =useState([]);
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);
  //ep 06:index5.js (Refer):useEffect is again a hook which is function and it takes 2 arguments they are 1st is the arrow function which gives the callback function and 2nd is the dependency array  so othe question is wen will this callback funciton be called so the ans is this callback function will be called after the component is rendered.SO if we want to call some function after the after the componenet is rendered then we need to use "UseEffect hook";
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9577549&lng=77.5992505&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //ep 06 here we get cors error : cors error is the error where browser will not allow us to call swiggy api from localhost i.e from 1 origin to another origin so need to cors extenison to chrome to avoid it .
    // so now we need to update this listOfRestaurants and rerender the ui we can update listOfRestaurants using setListOfRestaurants .
    // setListOfRestaunts(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)   //this is not the right way to write the data we need to use optional chaining
    setListOfRestaunts(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredrestaurant(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false) 
  return (
  <h1>Looks like you are offline,Please check your network connection</h1>
  );

  const {loggedInUser,setUserName}=useContext(UserContext);

  // const filterRes = () => {
  //   console.log('set filter is called')
  //   const filteredList = listOfRestauants.filter(
  //     (res) => res.data.avgRating > 4.0
  //   );
  //   setListOfRestaunts(filteredList);
  // }
  //ep 06: fetch is the superpower given by browser
  //ep:06 part 04: instead of rendering something on page before the api call we can use spinning loader,what will do is will write a condition that if my listOfRestaurants is empty i will load the loader component,but i using spinning loader a good way ,it is not we need to use shimmer ui:It is like we load fake page until we get actual data from th api.i.e instead of showing loading screen we can show the fake cards i.e blank grey cards,to make it we create a Shimmer component and just import it where wwe want to use and  as shown below.
  //this is type of rendering i.e rendering based on condition is conditional renderring
  // if(listOfRestauants.length === 0){
  //   console.log(listOfRestauants.length);
  //   return <Shimmer />;
  // }  commented in part 5 since using ternary operator
  //ep06:part 5 if the length of listOfRestaurants is 0 then only will return the shimmer component or else the below component will be rendered.here we use if else but we will use ternary condition with only 1 return i.e
  const [searchText,setSearchText] = useState("")
  const RestaurantCardPromoted=withPromotedLabel(Card);
  return listOfRestauants?.length === 0 ? <Shimmer /> :(
    <div className="body">
      <div className="filter flex">
      {/* ep06 part 6 search component */}
      <div className="search m-4 p-4">
        {/* ep06 part 6 here if the value is written as value={searchText} then we can type in the input field this is because we have set the value of the searchText as [""] and in input tag we have binded that value which is not changing also becuase we cannot directly chnge the useState variable value so we use onChange event handler to update to new value so now how will we get this new value it is through the callback value "e" ,here after everychange useState variable in the input field react rerendersthe body component quickly i.e after we type each character but it only do manipulation of the input field not other body component*/}
        <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=> {
          setSearchText(e.target.value);
        }}/>
        <button className="px-4 py-2 bg-green-50 m-4 rounded-lg" onClick={() => {
          //filter the restaurant cradsand update the ui
          //we need to get the search Text so we use value attribut in the input tag and bind it to local state variable so we use useState
          const filteredRestauarant=listOfRestauants.filter((res)=>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredrestaurant(filteredRestauarant);
          console.log(searchText);
          console.log(listOfRestauants);
        }}>Search</button>
      </div>
        {/* here onCLick takes a callback function */}
        <div  className="search m-4 p-4 items-center">
        <button
          className="px-4 py-2 bg-green-50 m-4 rounded-lg"
          onClick={() => {
            // listOfRestauants=listOfRestauants.filter((res) => res.data.avgRating > 4.0
            // ); before 2nd argument i.e setListOfRestauants
            const filteredList = listOfRestauants.filter(
              (res) =>
                res.info?.avgRating > 4.2
            );
            setListOfRestaunts(filteredList);
            /*here the setListOfRestauantstakes the data that has to  be pushed into the listOfRestauants or the new data that has to be updated in the main state,If we want to make the ListOfRestauants empty then we can make it by using setListOfRestauants([]) by passing it an empty array */
          }}
          // onClick={() => filterRes()}
        >
          Top Rated Restaurants
        </button>
        </div>
        <div className="search m-4 p-4 items-center">
          <label>UserName:</label>
          <input className="border border-black" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>

        </div>
      </div>
      <div className="flex flex-wrap">
        {
          filteredRestaurant.map((restaurant) => {
            return (
              // <RestaurantCard key={restaurant?.data.id} resData={restaurant} />
              // <Card key={restaurant?.info?.id} resData={restaurant} />
              <Link to={"/restaurants/" + restaurant?.info?.id} key={restaurant?.info?.id}>
                {restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant}/>
                ):(<Card  resData={restaurant} />)}
               
              </Link>
            );
          })
          
        }
      </div>
    </div>
  );
};
// onclick(filterRes);
// onclick(filterRes());
// onclick(() => filterRes());
// onclick(() => filterRes);
export default Body;
