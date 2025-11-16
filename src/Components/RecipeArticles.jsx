import React, { useEffect, useState } from "react";

const RecipeArticles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from blog.json
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to load blog.json", err));
  }, []);

  if (loading) {
    return (
      <h2 className="text-center text-xl py-10 font-semibold text-gray-600">
        Loading Articles...
      </h2>
    );
  }

  return (
    <div className="w-full px-4 md:px-8 lg:px-14 xl:px-20 py-10 font-sans">
      
      {/* Header Section */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold flex gap-2 items-center text-[#03624c]">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3174/3174880.png"
            className="w-10"
            alt=""
          />
          Recips Articles
        </h1>

        <div className="flex gap-4">
          <select className="border px-3 py-2 rounded-lg shadow-sm cursor-pointer">
            <option>Show: 50</option>
            <option>Show: 25</option>
            <option>Show: 10</option>
          </select>

          <select className="border px-3 py-2 rounded-lg shadow-sm cursor-pointer">
            <option>Sort: Featured</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">

        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition hover:scale-105 duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-64">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-orange-400 text-white px-2 py-1 text-xs rounded-full">
                {item.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 text-center">
              <p className="text-gray-400 text-sm">{item.category}</p>

              <h2 className="text-lg font-semibold mt-2 hover:text-[#3BB77E] cursor-pointer">
                {item.title}
              </h2>

              {/* Meta Info */}
              <div className="flex justify-center gap-4 mt-3 text-gray-500 text-sm">
                <span>{item.date}</span>
                <span>{item.views}</span>
                <span>{item.readTime}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default RecipeArticles;
