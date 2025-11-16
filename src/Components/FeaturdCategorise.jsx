import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import pic1 from '../assestPic/card1.png'
import pic2 from '../assestPic/card2.png'
import pic3 from '../assestPic/card3.png'
import pic4 from '../assestPic/card4.png'
import pic5 from '../assestPic/card5.png'
import pic6 from '../assestPic/card6.png'
import pic7 from '../assestPic/card7.png'
import pic8 from '../assestPic/card8.png'
import pic9 from '../assestPic/card9.png'
import pic10 from '../assestPic/card10.png'


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

function FeaturdCategorise() {
  const cards = [
    { img: pic1, title: "Cake & Milk", items: 11, bg: "bg-[#F2FCE4]" },
    { img: pic2, title: "Organic Kiwi", items: 6, bg: "bg-[#FEEFEB]" },
    { img: pic3, title: "Peach", items: 6, bg: "bg-[#F2FCE4]" },
    { img: pic4, title: "Red Apple", items: 10, bg: "bg-[#FEEFEB]" },
    { img: pic5, title: "Snacks", items: 11, bg: "bg-[#F2FCE4]" },
    { img: pic6, title: "Vegetables", items: 6, bg: "bg-[#FEEFEB]" },
    { img: pic7, title: "Strawberry", items: 10, bg: "bg-[#F2FCE4]" },
    { img: pic8, title: "Black Plum", items: 10, bg: "bg-[#FEEFEB]" },
    { img: pic9, title: "Custard Apple", items: 10, bg: "bg-[#F2FCE4]" },
    { img: pic10, title: "Coffee & Tea", items: 11, bg: "bg-[#FEEFEB]" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>

  <Swiper
  spaceBetween={10} 
  freeMode={true}
  pagination={{ clickable: true }}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  loop={true} 
  speed={800} 
  modules={[FreeMode, Pagination, Autoplay]}
  className="mySwiper"
  breakpoints={{
    0: { slidesPerView: 2 },
    375: { slidesPerView: 3 },     
    480: { slidesPerView: 4 },     
    768: { slidesPerView: 6 },     
    1024: { slidesPerView: 6 },    
    1280: { slidesPerView: 8 },    
  }}
>
  {cards.map((card, index) => (
    <SwiperSlide key={index}>
      <div className={`${card.bg} w-[141px] h-[185px] rounded-lg  flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg`}>
        
        <div className="w-full sm:w-36 md:w-40 lg:w-36  mb-2 justify-items-center  space-y-6">
          <img
            src={card.img}
            alt={card.title}
            className=" items-center justify-center object-cover rounded-lg"
          />
           <div className="flex flex-col items-center justify-center text-center px-1">
          <h3 className="text-base sm:text-lg font-medium">{card.title}</h3>
          <p className="text-gray-500 text-sm">{card.items} items</p>
        </div>
        </div>

       
      </div>
    </SwiperSlide>
  ))}
</Swiper>


   
    </div>

    
  );
}

export default FeaturdCategorise;
