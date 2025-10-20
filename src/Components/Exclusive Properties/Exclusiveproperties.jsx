import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { villa, secondtown, sofa, house, hall } from "../../assets/Imges";
import { exclusiveProperties } from "../Constant/Constant";

export default function ExclusiveProperties() {
  const mainPrevRef = useRef(null);
  const mainNextRef = useRef(null);
  const imgPrevRef = useRef(null);
  const imgNextRef = useRef(null);

  const [mainSwiperReady, setMainSwiperReady] = useState(false);
  const [imgSwiperReady, setImgSwiperReady] = useState(false);

  const rightImages = [hall, sofa, house];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-6 text-center">
          <h2 className="text-3xl font-semibold mb-2">Exclusive Properties</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            eius?
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* LEFT: Main Swiper */}
          <div className="relative w-full">
            <div className="rounded-2xl overflow-hidden h-[420px] md:h-[550px] lg:h-[560px] xl:h-[570px] relative">
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={20}
                loop={Infinity}
                navigation={{
                  prevEl: mainPrevRef.current,
                  nextEl: mainNextRef.current,
                }}
                onSwiper={() => setMainSwiperReady(true)}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = mainPrevRef.current;
                  swiper.params.navigation.nextEl = mainNextRef.current;
                }}
              >
                {exclusiveProperties.map((data, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-[420px] md:h-[550px] lg:h-[560px] xl:h-[570px] rounded-2xl overflow-hidden">
                      <img
                        src={data.img}
                        alt={data.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay info box */}
                      <div className="absolute bottom-6 left-6 bg-black/10 backdrop-blur-sm px-6 py-4 rounded-lg max-w-[70%]">
                        <h3 className=" font-bold text-white">{data.title}</h3>
                        <p className="text-sm text-gray-200 mt-1">
                          {data.location}
                        </p>

                        <div className="flex items-center gap-4 mt-4 text-sm text-white">
                          <div className="flex items-center gap-1">
                            {/* Use your bed icon */}
                            {data.bedicon && (
                              <data.bedicon className="w-5 h-5" />
                            )}
                            <span>{data.bed}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {/* Use your bathroom icon */}
                            {data.bathroomIcon && (
                              <data.bathroomIcon className="w-5 h-5" />
                            )}
                            <span>{data.bathroom}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {/* Use your car icon */}
                            {data.walleticon && (
                              <data.walleticon className="w-5 h-5" />
                            )}
                            <span>{data.wallet}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Main Navigation */}
              <button
                ref={mainPrevRef}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm text-white p-2 rounded-full"
              >
                <MdKeyboardArrowLeft size={20} />
              </button>
              <button
                ref={mainNextRef}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm text-white p-2 rounded-full"
              >
                <MdKeyboardArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT: Top Swiper + Bottom Flex */}
          <div className="flex flex-col gap-4 w-full">
            {/* Top Right Swiper */}
            <div className="rounded-2xl overflow-hidden h-[190px] md:h-[260px] lg:h-[270px] xl:h-[280px] relative">
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={12}
                loop={Infinity}
                navigation={{
                  prevEl: imgPrevRef.current,
                  nextEl: imgNextRef.current,
                }}
                onSwiper={() => setImgSwiperReady(true)}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = imgPrevRef.current;
                  swiper.params.navigation.nextEl = imgNextRef.current;
                }}
              >
                {rightImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`right-${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Top Right Navigation */}
              <button
                ref={imgPrevRef}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm text-white p-2 rounded-full"
              >
                <MdKeyboardArrowLeft size={18} />
              </button>
              <button
                ref={imgNextRef}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm text-white p-2 rounded-full"
              >
                <MdKeyboardArrowRight size={18} />
              </button>
            </div>

            {/* Bottom Flex */}
            <div className="flex gap-4 h-[280px] md:h-[270px]">
              <div className="flex-1 rounded-2xl overflow-hidden">
                <img
                  src={secondtown}
                  alt="small"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 rounded-2xl bg-[#0f1722] text-white p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold">280+</h3>
                  <p className="text-sm text-gray-300 mt-1">Properties</p>
                </div>
                <p className="text-sm text-gray-300">
                  Explore our wide variety of properties to find your dream home
                  today.
                </p>
                <div className="flex justify-end mt-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MdKeyboardArrowRight className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
