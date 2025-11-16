import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const MegaProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/mega.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-4 font-sans">

      {/* PAGE TITLE */}


      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

        {products.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition relative bg-white"
          >
            {/* Badge */}
            <span className="absolute top-3 left-3 bg-[#3BB77E] text-white text-xs px-3 py-1 rounded-br-xl rounded-tl-xl">
              {item.badge}
            </span>

            {/* Image */}
            <div className="w-full h-36 flex items-center justify-center mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-full object-contain"
              />
            </div>

            {/* Category */}
            <p className="text-gray-400 text-xs mb-1">Baking material</p>

            {/* Title */}
            <h2 className="text-[15px] font-semibold leading-snug text-gray-700 mb-2">
              {item.title}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-gray-400 text-xs">1</span>
            </div>

            {/* Brand */}
            <p className="text-xs text-gray-500">
              By{" "}
              <span className="text-[#3BB77E] font-medium">{item.brand}</span>
            </p>

            {/* Price & Add Button */}
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <p className="text-[#3BB77E] font-bold text-lg">
                  ${item.price}
                </p>
                <p className="line-through text-gray-400 text-sm">
                  ${item.prevPrice}
                </p>
              </div>

              <button className="flex items-center gap-1 bg-[#DEF9E7] text-[#3BB77E] px-3 py-2 rounded-lg text-sm">
                <span className="text-base"><FaCartPlus /></span> Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaProduct;
