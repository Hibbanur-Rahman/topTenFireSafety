import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useRef } from "react";

const ProductCarousel = ({ products }) => {
  const swiperRef = useRef(null);

  return (
    <div className="relative pb-12">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
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
        className="pb-20"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Card className="border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-50 p-4 relative">
                <Badge className="absolute top-2 right-2 bg-[#d32f2f] hover:bg-[#b71c1c] z-[10]">
                  Safety
                </Badge>
                <div className="relative w-full  mb-2">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-contain w-full h-[200px] transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-4 flex flex-col items-center flex-grow">
                <h3 className="font-bold text-center text-gray-800 mb-2">
                  {product.name}
                </h3>
                <div className="mt-auto pt-4 w-full">
                  <Button className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-3 shadow-lg cursor-pointer hover:bg-gray-50 transition-colors duration-300"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-[#d32f2f]"
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
        className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-3 shadow-lg cursor-pointer hover:bg-gray-50 transition-colors duration-300"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-[#d32f2f]"
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
};

export default ProductCarousel;
