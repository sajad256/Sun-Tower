import React from "react";
import { Navbar } from "../../Components/index";
import { CiSearch } from "react-icons/ci";

export default function Hero() {
  return (
    <section className="bg-[url('/hero-img.png')] bg-center bg-cover bg-black/60 bg-blend-darken h-screen 2xl:h-[700px]">
      {/* Navbar */}
      <div className="pt-2">
        <Navbar />
      </div>

      {/* Hero Info */}
      <div className="info pt-40 text-center mx-3 xl:mx-auto xl:max-w-[1200px] 2xl:max-w-[1400px]">
        <h1 className="text-white font-bold text-4xl md:text-5xl">
          Find Your Perfect Home here
        </h1>
        <div className="md:flex md:justify-center">
          <p className="pt-4 text-gray-300 md:w-[380px] mx-auto">
            Explore a wide range of properties for sale and rent in Kabul, from
            modern apartments to spacious family homes.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex justify-center">
        <div className="Main-for-All mt-10 p-3 bg-white flex items-center justify-between mx-3 rounded-full md:w-[400px] xl:w-[500px] 2xl:w-[600px]">
          <div className="All cursor-pointer hover:bg-[#d88946]/20 px-4 py-2 rounded-full transition-all duration-200">
            <h1 className="text-[#D88946] font-medium">All</h1>
          </div>
          <div className="Apartments cursor-pointer hover:bg-[#d88946]/20 px-4 py-2 rounded-full transition-all duration-200">
            <h1 className="text-[#D88946] font-medium">Apartments</h1>
          </div>
          <div className="Houses cursor-pointer hover:bg-[#d88946]/20 px-4 py-2 rounded-full transition-all duration-200">
            <h1 className="text-[#D88946] font-medium">Houses</h1>
          </div>
          <div className="search-icon px-2 py-2 bg-[#D88946] rounded-full">
            <CiSearch className="text-white" />
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="what-looking-for pt-5">
        <p className="text-gray-300 text-center">What are you looking for?</p>
      </div>
    </section>
  );
}
