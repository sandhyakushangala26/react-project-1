import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header callled");
  useEffect(() => {
    console.log("use effect called");
  }, []);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50">
      {/* for gettinf flex properties just change the claaaaaasname fro mheader to flex. */}
      <div className="logo-container">
        <img className="w-100" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          {/* <li>Online Status:{onlineStatus ? "✔" : "🔴"}</li> */}
          <li className="px-4">
            <Link to=" ">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>

          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
