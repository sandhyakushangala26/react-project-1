import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import RestroMenu from "./components/RestroMenu";
import Grocery from "./components/Grocery";

const Grocery=lazy(()=>import("./components/Grocery"));   //its a callbcak function that will take the path of grocery component and load it when user actually moves to that page
const About=lazy(()=>import("./components/About")); 
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body />instaed of bdy i will write outlet */}
      <Outlet/>
    </div>
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
