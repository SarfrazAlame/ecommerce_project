import React from "react";
import { BiSolidCartAlt } from "react-icons/bi";
import { RiLoginCircleLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {


  return (
    <div className="h-20 w-full bg-gray-600 text-gray-100 flex items-center ">
      <div className="w-full flex justify-between sm:mx-16">
        <Link to={"/"} className="text-2xl font-medium hover:text-white">
          ONLINE SHOP
        </Link>
        <div className="flex gap-4">
          <NavLink to={"/cart"} className="flex gap-2">
            <BiSolidCartAlt className="text-xl mt-2 font-medium" />
            <h1 to={"/cart"} className="font-light mt-2">
             <span></span> CART
            </h1>
          </NavLink>
          <NavLink to={"signin"} className="flex  gap-2">
            <RiLoginCircleLine className="text-xl mt-2" />
            <h1 to={"/signin"} className="font-light mt-2">
              SIGNIN
            </h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
