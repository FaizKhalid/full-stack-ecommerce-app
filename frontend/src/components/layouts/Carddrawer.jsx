import React from "react";
import { IoMdClose } from "react-icons/io";
import Cartcontent from "../cart/Cartcontent";
function Carddrawer({ drawerOpen, Carttoggle }) {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[25rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* close button */}
      <button
        onClick={Carttoggle}
        className="flex justify-end p-4  text-gray-700 hover:text-black"
      >
        <IoMdClose className="w-5 h-5" />
      </button>
      <h3 className="font-semibold px-2 text-xl "> Your Cart</h3>
      {/* cart Area with scrollbar */}

      <div className="flex-grow overflow-y-auto">
        <Cartcontent />
      </div>
      {/* checkout button */}
      <div className="sticky bg-white bottom-0  flex flex-col items-center my-2 w-full p-2 shadow-2xl ">
        <button className="bg-black text-white p-2 font-semibold rounded w-full">
          Check out
        </button>
        <p className="text-sm text-gray-400 text-center py-1 ">
          Shipping, taxes and discount codes are calculated at checkout
        </p>
      </div>
    </div>
  );
}

export default Carddrawer;
