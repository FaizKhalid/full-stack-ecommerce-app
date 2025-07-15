import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RiCloseFill } from "react-icons/ri";

function Searchbar() {
  const [isopen, setisopen] = useState(false);
  const [searchTerm, setsearchTerm] = useState("");
  const handleclick = () => {
    setisopen(!isopen);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Term", searchTerm);
    setisopen(false);
  };
  return (
    <>
      <div
        className={`flex items-center justify-center w-full transition-all duration-300 ${
          isopen ? "absolute top-0 left-0 bg-white h-18 z-50 shadow" : "w-auto"
        } `}
      >
        {isopen ? (
          <div className="relative w-1/2 flex gap-1">
            <form
              onSubmit={handleSearch}
              className="relative flex items-center justify-center w-full"
            >
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => {
                  setsearchTerm(e.target.value);
                }}
                className="border-amber-100 shadow rounded-lg px-2 py-1 w-full outline-gray-400"
              />
              <button
                type="submit"
                className="text-gray-700 hover:text-black absolute right-1"
              >
                <HiMagnifyingGlass className="h-5 w-5 " />
              </button>
            </form>

            <button
              onClick={handleclick}
              className="text-gray-700 hover:text-black"
            >
              <RiCloseFill className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleclick}
            className="text-gray-700 hover:text-black"
          >
            <HiMagnifyingGlass className="h-6 w-6 " />
          </button>
        )}
      </div>
    </>
  );
}

export default Searchbar;
