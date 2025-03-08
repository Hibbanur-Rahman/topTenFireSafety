"use client";

import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useRef } from "react";

export default function ProductCarousel({ products }) {
  const swiperRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // Autoplay delay in milliseconds (3 seconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}

        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
           
          >
            <Card className="border rounded-lg overflow-hidden h-full flex flex-col">
              <div className="p-4 flex flex-col items-center">
                <div className="relative w-full aspect-square mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-contain w-full h-[240px]"
                  />
                </div>
                <h3 className="font-bold text-center">{product.name}</h3>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-md cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-md cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
