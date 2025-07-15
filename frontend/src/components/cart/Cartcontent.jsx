import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
function Cartcontent() {
  const content = [
    {
      name: "Jeans",
      colour: "White",
      size: "M",
      price: 24,
      quantity: 45,
      img_src: "https://picsum.photos/id/1/200?random=1",
    },
    {
      name: "Jeans",
      colour: "White",
      size: "M",
      price: 24,
      quantity: 45,
      img_src: "https://picsum.photos/id/1/200?random=1",
    },
    {
      name: "Jeans",
      colour: "White",
      size: "M",
      price: 24,
      quantity: 45,
      img_src: "https://picsum.photos/id/1/200?random=1",
    },
    {
      name: "Jeans",
      colour: "White",
      size: "M",
      price: 24,
      quantity: 45,
      img_src: "https://picsum.photos/id/1/200?random=1",
    },
    {
      name: "Jeans",
      colour: "White",
      size: "M",
      price: 24,
      quantity: 45,
      img_src: "https://picsum.photos/id/1/200?random=1",
    },
    {
      name: "Jeans",
      colour: "White",
      size: "M",
      price: 24,
      quantity: 45,
      img_src: "https://picsum.photos/id/1/200?random=1",
    },
    {
      name: "Jeans",
      colour: "White",
      size: "M",
      price: 24,
      quantity: 45,
      img_src: "https://picsum.photos/id/1/200?random=1",
    },
    {
      name: "Jeans",
      colour: "White",
      size: "M",
      price: 24,
      quantity: 45,
      img_src: "https://picsum.photos/id/1/200?random=1",
    },
    {
      name: "Jeans",
      colour: "White",
      size: "M",
      price: 24,
      quantity: 45,
      img_src: "https://picsum.photos/id/1/200?random=1",
    },
  ];
  return (
    <div>
      {content.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between ">
            <div className=" flex">
              <img
                src={item.img_src}
                alt={item.name}
                className="w-20 h-24 m-2 rounded"
              />
              <div className="p-2">
                <div className="">{item.name}</div>
                <div className="text-sm">
                  size: {item.size} | colour : {item.colour}
                </div>
                <div className="flex my-2 gap-1 items-center">
                  <button className="bg-gray-300 p-0.5 rounded">-</button>
                  <p className="text-sm">{item.quantity.toLocaleString()}</p>
                  <button className="bg-gray-300 p-0.5 rounded">+</button>
                </div>
              </div>
            </div>

            <div className="p-2 flex flex-col justify-between">
              <div className="">$: {item.price.toLocaleString()}</div>
              <AiTwotoneDelete className="my-1 h-6 w-6" />
            </div>
          </div>
          <div className="flex border mx-3 bg-gray-300">
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cartcontent;
