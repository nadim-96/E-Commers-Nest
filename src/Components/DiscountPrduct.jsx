import React, { useEffect, useState } from "react";

function Price({ price }) {
  return <span className="font-semibold text-green-600">${price.toFixed(2)}</span>;
}

function OldPrice({ old_price }) {
  if (!old_price) return null;
  return <span className="text-sm text-gray-400 line-through ml-2">${old_price.toFixed(2)}</span>;
}

function Stars({ rating }) {
  const max = 5;
  const filled = Math.max(0, Math.min(max, Math.round(rating || 0)));
  return (
    <div className="flex items-center space-x-0.5 text-yellow-400 text-sm">
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          className={`w-3 h-3 ${i < filled ? "fill-current" : "text-gray-200"}`}
          viewBox="0 0 20 20"
        >
          <path d="M10 1.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L10 15.9 4.8 18l1-5.8L1.5 8.1l5.9-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductsGrid() {
  const [products, setProducts] = useState([]);

  const fallbackImg = "https://via.placeholder.com/300x300?text=No+Image";

  useEffect(() => {
    fetch("/discount.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("JSON Load Error:", err));
  }, []);

  return (
    <div className="p-6">
      

      {products.length === 0 ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-200"
              style={{ minHeight: 340 }}
            >
              {/* Discount badge */}
              {item.discount && (
                <div className="absolute top-3 left-3">
                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.discount}
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="flex justify-center items-center h-40 mb-3">
                <img
                  src={item.picture}
                  alt={item.title}
                  onError={(e) => (e.currentTarget.src = fallbackImg)}
                  className="max-h-36 object-contain rounded-md"
                />
              </div>

              {/* Text Content */}
              <p className="text-xs text-gray-400 mb-1">{item.category}</p>

              <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1 leading-tight">
                {item.title}
              </h3>

              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Stars rating={item.rating} />
                  <span className="text-xs text-gray-400">{item.rating}</span>
                </div>
                <p className="text-xs text-gray-500">
                  By <span className="text-green-600 font-medium">{item.brand}</span>
                </p>
              </div>

              <div className="flex items-end justify-between">
                {/* Price Handling */}
                {item.price_range ? (
                  <span className="text-green-600 font-semibold">{item.price_range}</span>
                ) : (
                  <div className="flex items-center">
                    <Price price={item.price} />
                    <OldPrice old_price={item.old_price} />
                  </div>
                )}

                <button className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm px-3 py-1 rounded-md hover:bg-emerald-100">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="10" cy="19" r="1" fill="currentColor" />
                    <circle cx="18" cy="19" r="1" fill="currentColor" />
                  </svg>
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
