import React, { useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { navLinks, navAssets } from "../Constant/Constant";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative mx-3 xl:mx-auto xl:max-w-[1200px] 2xl:max-w-[1400px] z-50">
      {/* Navbar container */}
      <div
        className={`flex justify-between items-center p-2 bg-white shadow-md transition-all duration-300 ${
          isOpen ? "rounded-t-xl" : "rounded-xl"
        } md:rounded-full`}
      >
        {/* Logo */}
        <div className="logo">
          <img className="w-[40px]" src={navAssets.logo} alt="logo" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-black cursor-pointer font-medium"
            >
              {link.title}
            </li>
          ))}
        </ul>

        {/* Feedback + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1 bg-[#D88946] md:px-2 md:py-2 rounded-full">
            <span className="text-white font-medium">Feedback</span>
            <img
              className="w-[24px]"
              src={navAssets.feedbackImg}
              alt="feedback"
            />
          </div>

          {/* Mobile toggle */}
          <div
            className="md:hidden cursor-pointer z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <RiCloseLine className="text-[#D98A46]" size={36} />
            ) : (
              <RiMenu3Fill className="text-[#D98A46]" size={36} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white shadow-md transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-96 opacity-100 rounded-b-xl border-t border-gray-200"
            : "max-h-0 opacity-0 rounded-b-none"
        }`}
      >
        <ul className="flex flex-col p-4 gap-4">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-black cursor-pointer font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </li>
          ))}
          <div className="flex items-center gap-2 justify-center bg-[#D88946] px-3 py-2 rounded-full mt-2">
            <span className="text-white font-medium">Feedback</span>
            <img
              className="w-[24px]"
              src={navAssets.feedbackImg}
              alt="feedback"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
}
