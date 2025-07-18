import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
function NewArrival() {
  const scrollRef = useRef(null);
  const [IsDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canscrollLeft, setcanScrollLeft] = useState(false);
  const [canscrollRight, setcanScrollRight] = useState(false);

  const newArrival = [
    {
      _id: "1",
      name: "Stylish Jackey",
      price: 299,
      image: [
        {
          url: "https://picsum.photos/id/1/300/400",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Pants",
      price: 299,
      image: [
        {
          url: "https://picsum.photos/id/2/300/400",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jackey",
      price: 299,
      image: [
        {
          url: "https://picsum.photos/id/3/300/400",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jackey",
      price: 299,
      image: [
        {
          url: "https://picsum.photos/id/4/300/400",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jackey",
      price: 299,
      image: [
        {
          url: "https://picsum.photos/id/5/300/400",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish Jackey",
      price: 299,
      image: [
        {
          url: "https://picsum.photos/id/9/300/400",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish Jackey",
      price: 299,
      image: [
        {
          url: "https://picsum.photos/id/6/300/400",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish Jackey",
      price: 299,
      image: [
        {
          url: "https://picsum.photos/id/7/300/400",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "9",
      name: "Stylish Jackey",
      price: 299,
      image: [
        {
          url: "https://picsum.photos/id/8/300/400",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];
  // ✅ Scroll handler
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // ✅ Update button states
  const updateScrollButton = () => {
    const container = scrollRef.current;
    if (container) {
      const left = container.scrollLeft;
      const visible = container.clientWidth;
      const total = container.scrollWidth;

      setcanScrollLeft(left > 0);
      setcanScrollRight(left + visible < total - 1); // -1 to avoid rounding issues
    }
  };

  // ✅ Handle Mouse Down

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  // ✅ Handle Mouse Move
  const handleMouseMove = () => {
    if (!IsDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  // ✅ Handle Mouse Up or Leave
  const handleMouseUporLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollButton);
    updateScrollButton(); // Run once on mount

    return () => container.removeEventListener("scroll", updateScrollButton);
  }, []);
  return (
    <section className="mx-5">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-xl font-bold mb-2">Explore New Arrival</h2>
        <p className="text-sm text-gray-500 mb-8">
          Discover the latest style straight off the runway, freshing added to
          keep the wardrobe on the cutting edge of fashion
        </p>
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canscrollLeft}
            className={`p-2 rounded-full border ${
              canscrollLeft
                ? "bg-white text-black hover:bg-black hover:text-white"
                : "bg-gray-400 text-gray-50 cursor-not-allowed"
            }`}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-2 rounded-full border ${
              canscrollRight
                ? "bg-white text-black hover:bg-black hover:text-white"
                : "bg-gray-400 text-gray-50 cursor-not-allowed"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      {/* scroll button */}

      {/* scrollable content */}
      <div
        ref={scrollRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUporLeave}
        onMouseLeave={handleMouseUporLeave}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          IsDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {newArrival.map((item) => (
          <div
            className="min-w-[50%] sm:min-w-[50%] lg:min-w-[20%] relative"
            key={item._id}
          >
            <img
              src={item.image[0]?.url}
              alt={item.image[0]?.altText}
              className="object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 right-0 left-0 bg-opacity-50 backdrop-blur-md text-white rounded-b-lg p-4">
              <Link to={`/products/${item._id}`} className="block">
                <h2 className="font-medium">{item.name}</h2>
                <p className="mt-1">${item.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrival;
