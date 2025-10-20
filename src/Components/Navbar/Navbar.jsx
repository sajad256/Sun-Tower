import React, { useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { MdArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { navLinks, navAssets } from "../Constant/Constant";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent mt-3">
      <div className="mx-3 xl:mx-auto xl:max-w-[1200px] 2xl:max-w-[1400px]">
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
          <ul className="hidden md:flex gap-6 relative">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group cursor-pointer">
                <div
                  className={`flex items-center gap-1 font-medium transition-colors ${
                    link.title === "Home"
                      ? "text-[#D88946]"
                      : "text-black hover:text-[#D88946]"
                  }`}
                >
                  {link.title}
                  {link.dropdown && (
                    <MdArrowDropDown className="text-2xl mt-[2px] transition-transform duration-500 group-hover:rotate-180" />
                  )}
                </div>

                {/* Desktop dropdown menu */}
                {link.dropdown && (
                  <ul
                    className="absolute left-0 top-7   bg-white shadow-lg rounded-lg overflow-hidden
                max-h-0 opacity-0 invisible
                group-hover:opacity-100 group-hover:visible group-hover:max-h-96
                transition-all duration-300 ease-out transform -translate-y-4 group-hover:translate-y-0 w-[300px]"
                  >
                    {link.dropdown.map((item, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 text-black hover:text-[#D88946] transition-colors flex items-center gap-2 relative mt-3"
                      >
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-5 h-5"
                        />
                        {item.title}
                        {i !== link.dropdown.length - 1 && (
                          <span className="absolute bottom-0 left-4 w-[calc(100%-1rem)] border-b border-gray-200"></span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
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

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-500 ease-out ${
            isOpen
              ? "max-h-[1000px] opacity-100 rounded-b-xl border-t border-gray-200"
              : "max-h-0 opacity-0 rounded-b-none"
          }`}
        >
          <ul className="flex flex-col p-4 gap-2">
            {navLinks.map((link, index) => (
              <li key={index} className="cursor-pointer text-black font-medium">
                <div
                  className="flex justify-between items-center py-2 hover:text-black "
                  onClick={() =>
                    link.dropdown
                      ? setMobileDropdownOpen(!mobileDropdownOpen)
                      : setIsOpen(false)
                  }
                >
                  {link.title}
                  {link.dropdown &&
                    (mobileDropdownOpen ? (
                      <MdOutlineArrowDropUp className="text-2xl" />
                    ) : (
                      <MdArrowDropDown className="text-2xl" />
                    ))}
                </div>

                {/* Mobile dropdown items */}
                {link.dropdown && (
                  <ul
                    className={`pl-4 flex flex-col gap-1 overflow-hidden transition-all duration-500 ease-out ${
                      mobileDropdownOpen ? "max-h-60" : "max-h-0"
                    }`}
                  >
                    {link.dropdown.map((item, i) => (
                      <li
                        key={i}
                        className="py-1 text-black hover:text-[#D88946] transition-colors flex items-center gap-2 border-b"
                        onClick={() => setIsOpen(false)}
                      >
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-5 h-5"
                        />
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Mobile Feedback */}
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
      </div>
    </nav>
  );
}
