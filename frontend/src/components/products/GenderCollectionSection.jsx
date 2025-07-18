import React from "react";
import menCollections from "../../assets/mens-collection.webp";
import womenCollections from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

function GenderCollectionSection() {
  return (
    <div className="container mx-auto gap-2 grid grid-cols-1 md:grid-cols-2 w-full px-10">
      <div className="w-full py-10 relative ">
        <img
          src={menCollections}
          alt="men collection banner"
          className="h-[550px] w-[550px] object-cover"
        />
        <div className="absolute bottom-20 left-8 bg-white px-2">
          <h2 className="text-xl font-bold text-gray-800 mb-1 ">
            Men's Collection
          </h2>
          <Link
            // to="/collection/all?gender=Women"
            className="text-shadow-gray-900 underline"
          >
            Shop now
          </Link>
        </div>
      </div>
      <div className="relative w-full py-10">
        <img
          src={womenCollections}
          alt="men collection banner"
          className="h-[550px] w-[550px] object-cover"
        />
        <div className="absolute bottom-20 left-8 bg-white px-2">
          <h2 className="text-xl font-bold text-gray-800 mb-1 ">
            Women's Collection
          </h2>
          <Link
            // to="/collection/all?gender=Women"
            className="text-shadow-gray-900 underline"
          >
            Shop now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GenderCollectionSection;
