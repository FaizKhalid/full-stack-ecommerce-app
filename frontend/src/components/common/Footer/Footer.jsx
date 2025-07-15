import React from "react";

import { FaMeta } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 px-2 lg:px-4 gap-7">
        <div>
          <h3 className="text-md text-gray-800 mb-4 font-semibold">
            NewsLetter
          </h3>
          <p className="text-gray-800 mb-4 text-sm">
            Be the first to hear exclusive events discount and offer
          </p>
          <p className="font-semibold text-sm">
            Sign up and get 10% off on first order
          </p>

          {/* News Letter Form */}

          <form className="flex mt-2">
            <input
              type="email "
              placeholder="Enter your email"
              className="p-1 w-full border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-1 rounded-r-lg uppercase md:px-2 text-[0.8em] hover:bg-gray-800 "
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="space-y-2">
          <h3 className="text-md text-gray-800 mb-4 font-semibold">Shop</h3>
          <p className="text-sm  text-gray-400 font-semibold hover:text-black">
            Men's Top Wear
          </p>
          <p className="text-sm text-gray-400 font-semibold hover:text-black">
            Women's Top Wear
          </p>
          <p className="text-sm text-gray-400 font-semibold hover:text-black">
            Men's Bottom Wear
          </p>
          <p className="text-sm text-gray-400 font-semibold hover:text-black">
            Women's Top Wear
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-md text-gray-800 mb-4 font-semibold">Support</h3>
          <p className="text-sm  text-gray-400 font-semibold hover:text-black">
            Men's Top Wear
          </p>
          <p className="text-sm text-gray-400 font-semibold hover:text-black">
            Contact Us
          </p>
          <p className="text-sm text-gray-400 font-semibold hover:text-black">
            About Us
          </p>
          <p className="text-sm text-gray-400 font-semibold hover:text-black">
            FAQs
          </p>
        </div>
        <div>
          <h3 className="text-md text-gray-800 mb-4 font-semibold">
            Follow Us
          </h3>
          <div className=" flex gap-2">
            <a href="" className=" text-black hover:text-gray-400">
              <FaMeta className="h-4 w-4" />
            </a>
            <a href="" className="  text-black hover:text-gray-400">
              <FaFacebook className="h-4 w-4" />
            </a>
            <a href="" className=" text-black hover:text-gray-400">
              <FaSquareInstagram className="h-4 w-4" />
            </a>
          </div>
          <h4 className="text-sm text-gray-500 mt-3">Call Us</h4>
          <h4 className="text-sm text-black mt-1">+9223122893813</h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
