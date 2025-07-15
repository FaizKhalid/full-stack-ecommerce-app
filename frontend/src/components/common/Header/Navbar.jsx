import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import Searchbar from "./Searchbar";
import Carddrawer from "../../layouts/Carddrawer";
function Navbar() {
  const [drawerOpen, setdrawerOpen] = useState(false);
  const [MobNavIsOpen, setMobNavIsOpen] = useState(false);
  const Carttoggle = () => {
    setdrawerOpen(!drawerOpen);
  };
  const Navtoggle = () => {
    setMobNavIsOpen(!MobNavIsOpen);
  };
  return (
    <>
      <div className=" flex items-center justify-between py-2 px-4 shadow">
        {/* left side nav */}
        <div className="text-xl font-medium">
          <Link to="/">Rabbit</Link>
        </div>
        {/* middle nav side */}
        <div className="hidden md:block text-sm font-semibold text-gray-400 space-x-4 uppercase">
          <Link to="/" className=" hover:text-gray-800">
            Men
          </Link>
          <Link to="/" className=" hover:text-gray-800">
            Women
          </Link>
          <Link to="/" className=" hover:text-gray-800">
            Top wear
          </Link>
          <Link to="/" className=" hover:text-gray-800">
            Bottom Wear
          </Link>
        </div>
        {/* right nav */}
        <div className="flex items-center gap-2 px-6">
          <Link to="/" className=" text-gray-700 hover:text-black">
            <AiOutlineUser className="h-5 w-5" />
          </Link>
          <button
            onClick={Carttoggle}
            className="relative text-gray-700 hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6" />
            <span className="absolute top-1 left-3 bg-[#ea2e0e] rounded-full px-1.5 py-0.5 text-white text-xs">
              4
            </span>
          </button>
          {/* search bar */}
          <Searchbar />
          <button onClick={Navtoggle} className="md:hidden">
            <HiMiniBars3BottomLeft className="h-6 w-6" />
          </button>
        </div>
      </div>
      <Carddrawer drawerOpen={drawerOpen} Carttoggle={Carttoggle} />
      {/* mobile navigation */}
      <div
        className={`fixed top-0 left-0 w-1/3 sm:w-1/3 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
          MobNavIsOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* close button */}
        <button
          onClick={Navtoggle}
          className="flex justify-end p-4  text-gray-700 hover:text-black"
        >
          <IoMdClose className="w-5 h-5" />
        </button>
        <h3 className="font-semibold px-2 text-xl "> Menu</h3>
        <div className="my-3 flex flex-col space-y-1 mx-4 uppercase font-semibold ">
          <Link to="/">MEN</Link>
          <Link to="/">WOMEN</Link>
          <Link to="/">TOP WEAR</Link>
          <Link to="/">bottom wear </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
