import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , Outlet, RouterProvider, useLocation} from "react-router-dom";
import About from "./components/About";
import RestroMenu from "./components/RestroMenu";
import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import UserContext from "./utils/UserContext";


const Grocery=lazy(()=>import("./components/Grocery"));   //its a callbcak function that will take the path of grocery component and load it when user actually moves to that page
const About=lazy(()=>import("./components/About")); 

const AppLayout = () => {
const [userName,setUserName]=useState();

useEffect(()=>{
  const data={
    name:"Sandy"
  };
  setUserName(data.name);
})
    return (
    <UserContext.Provider value={{loggedInUser:userName}}>
    <div className="app">
      <UserContext.Provider value={{loggedInUser:"Rani"}}>
        {/* for this block i.e The header will be having rani as username ,and all the other components out of this will be having the username Sandy */}
      <Header />             
      </UserContext.Provider>
      {/* <Body />instaed of bdy i will write outlet */}
      <Outlet/>
    </div>
    </UserContext.Provider>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading</h1>}><About/></Suspense>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading</h1>}><Grocery /></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestroMenu/>,
      },
    ],
    errorElement:<Error/>,             //for unmatched path
  
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);  instead of rendering directly we use router providaer configuration
root.render(<RouterProvider router={appRouter} />);
