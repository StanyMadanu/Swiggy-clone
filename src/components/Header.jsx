import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loginUser } = useContext(UserContext);

  const handleClick = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-purple-100 shadow-lg mb-5 sticky z-10 top-0 px-10">
      <div className="">
        <img className="w-32" src={logo} alt="Logo"></img>
      </div>

      <ul className="flex items-center gap-5">
        <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li>Cart</li>
        <button
          className="bg-blue-300 px-5 py-2 m-0 rounded-lg"
          onClick={handleClick}
        >
          {btnName}
        </button>
        <li className="font-bold">{loginUser}</li>
      </ul>
    </div>
  );
};

export default Header;
