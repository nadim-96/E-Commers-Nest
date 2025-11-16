import React, { useState } from "react";

function MegaFilter() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "All",
    "Baking material",
    "Fresh Fruits",
    "Vegetables",
    "Milks & Dairies",
    "Meats",
  ];

  return (
    <div className="w-full px-4 md:px-10 lg:px-15 py-6 font-sans">

      {/* TITLE + DESKTOP MENU */}
      <div className="flex justify-between items-center">

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
          Popular Products
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-600 font-medium">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-[#3BB77E] transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Filter Button */}
        <button
          className="md:hidden px-4 py-2 bg-[#3BB77E] text-white rounded-lg"
          onClick={() => setOpen(!open)}
        >
          Filter ▼
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden mt-4 bg-white shadow-md rounded-xl p-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block py-2 text-gray-600 border-b last:border-none hover:text-[#3BB77E] transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default MegaFilter;
