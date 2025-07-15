import React from "react";
import { FaMeta } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
function Topbar() {
  return (
    <div className="bg-[#ea2e0e] text-white p-1 pr-2 pl-3 text-center md:flex justify-between">
      {/* left top bar */}
      <div className="hidden md:flex gap-2">
        <a href="" className=" text-white hover:text-black">
          <FaMeta className="h-5 w-5" />
        </a>
        <a href="" className=" text-white hover:text-black">
          <FaFacebook className="h-5 w-5" />
        </a>
        <a href="" className=" text-white hover:text-black">
          <FaSquareInstagram className="h-5 w-5" />
        </a>
      </div>
      {/* middle top bar */}
      <div className="">
        <h6>Welcome to our Store Enjoy exclusive discount</h6>
      </div>
      {/* Right top bar */}
      <div className="hidden md:flex ">
        <h6>+923122893813</h6>
      </div>
    </div>
  );
}

export default Topbar;
