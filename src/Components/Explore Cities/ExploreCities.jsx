import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { exploreCities } from "../Constant/Constant";

export default function ExploreCities() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="mt-16 xl:mt-20">
      <div className="text-center">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Explore Cities
        </h1>
        <p className="text-sm w-[170px] md:w-[280px] mx-auto mt-2 text-gray-600">
          Discover the best places to live and invest in.
        </p>
      </div>

      <div className="relative mt-16 flex justify-center items-center overflow-visible">
        {/* Prev Button */}
        <button
          ref={prevRef}
          aria-label="Previous"
          type="button"
          className="absolute left-2 md:left-6 lg:-left-6 xl:-left-8 top-1/2 -translate-y-1/2 z-50 bg-white shadow-md p-2 md:p-3 rounded-full hover:bg-gray-100"
        >
          <MdOutlineKeyboardArrowLeft className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl" />
        </button>

        <div className="w-full max-w-[1200px] px-4 lg:px-6 xl:px-8 overflow-visible">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={12}
            slidesPerView={1}
            slidesPerGroup={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 5, spaceBetween: 14 }, // LG & XL
            }}
            className="py-2"
          >
            {exploreCities.map((data, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="">
                  <div className="flex justify-center">
                    <div className="w-[140px] md:w-[220px] lg:w-[140px] xl:w-[150px] ">
                      <img
                        src={data.img}
                        alt={data.City || `city-${index}`}
                        className="w-full h-auto rounded-xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="info flex flex-col justify-center items-center w-[240px] lg:w-[150px]">
                    <p className="text-sm text-gray-500 mt-2">
                      {data.properties}
                    </p>
                    <p className="font-bold">{data.City}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Next Button */}
        <button
          ref={nextRef}
          aria-label="Next"
          type="button"
          className="absolute right-2 md:right-6 lg:-right-6 xl:-right-8 top-1/2 -translate-y-1/2 z-50 bg-white shadow-md p-2 md:p-3 rounded-full hover:bg-gray-100"
        >
          <MdOutlineKeyboardArrowRight className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl" />
        </button>
      </div>
    </section>
  );
}
