import React from "react";
import { footerLinks, Company, Services, Support } from "../Constant/Constant";

export default function Footer() {
  return (
    <>
      <div className="2xl:flex 2xl:justify-center 2xl:items-center">
        <div className="Main-for-all-and-flex md:p-6">
          <div className="#">
            {/* NOTE: only md+ layout changes are added below via md: classes.
        Mobile remains exactly as before. */}
            <div className="md:flex md:justify-between md:items-start">
              {/* Left side on md+: title + icons (mobile unchanged) */}
              <div className="md:w-1/3">
                {footerLinks.map((data) => {
                  return (
                    <div>
                      <div className="title-email pt-6 mx-4">
                        <h1 className="font-bold">{data.title}</h1>
                        <p className="font-bold">{data.email}</p>
                      </div>
                      <div className="main-for-relax-and-icons mx-4">
                        <div className="relaxtime">
                          <p className="text-sm">{data.relaxtime}</p>
                        </div>
                        <div className="icons flex gap-3 mt-6">
                          {data.icon &&
                            data.icon.map((IconComponent, idx) => (
                              <div
                                key={idx}
                                className={`px-2 py-2 border rounded-full flex items-center justify-center ${
                                  idx === 0
                                    ? "hover:bg-[#2563EB]"
                                    : idx === 1
                                    ? "hover:bg-[#E1306C]"
                                    : idx === 2
                                    ? "hover:bg-[#000000]"
                                    : idx === 3
                                    ? "hover:bg-[#25D366]"
                                    : ""
                                }`}
                              >
                                <IconComponent className="hover:text-white" />
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right side on md+: lists (mobile unchanged) */}
              <div className="md:w-6/12 flex justify-center gap-4 items-center md:flex md:justify-between mt-8 2xl:mt-0">
                {/* first UL or Lists */}
                <div>
                  {Company.map((data) => {
                    return (
                      <ul className="text-sm">
                        <h1 className="font-semibold">{data.title}</h1>
                        <li className="mt-5 text-gray-500 flex justify-center md:justify-start">
                          {data.Contact}
                        </li>
                        <li className="mt-5 text-gray-500 flex justify-center md:justify-start">
                          {data.Selling}
                        </li>
                        <li className="mt-5 text-gray-500 flex justify-center md:justify-start">
                          {data.About}
                        </li>
                        <li className="mt-5 text-gray-500 flex justify-center md:justify-start">
                          {data.Properties}
                        </li>
                      </ul>
                    );
                  })}
                </div>

                {/* Second UL or Lists */}
                <div>
                  {Services.map((data) => {
                    return (
                      <ul className="text-sm">
                        <h1 className="font-semibold flex justify-center md:justify-start">
                          {data.title}
                        </h1>
                        <li className="mt-5 text-gray-500 flex justify-center md:justify-start">
                          {data.Home}
                        </li>
                        <li className="mt-5 text-gray-500 flex justify-center md:justify-start">
                          {data.Renting}
                        </li>
                        <li className="mt-5 text-gray-500 flex justify-center md:justify-start">
                          {data.Management}
                        </li>
                        <li className="mt-5 text-gray-500 flex justify-center md:justify-start">
                          {data.Buying}
                        </li>
                      </ul>
                    );
                  })}
                </div>

                {/* third UL or Lists */}
                <div className="2xl:mt-6">
                  {Support.map((data) => {
                    return (
                      <ul className="text-sm">
                        <h1 className="font-semibold flex justify-center md:justify-start">
                          {data.title}
                        </h1>
                        <li className="mt-5 text-gray-500 flex justify-center md:justify-start">
                          {data.FAQ}
                        </li>
                        <li className="mt-5 text-gray-500 flex justify-center md:justify-start">
                          {data.HelpCenter}
                        </li>
                        <li className="mt-5 text-gray-500 flex justify-center md:justify-start">
                          {data.Privacy}
                        </li>
                        <li className="mt-5 text-gray-500 flex justify-center md:justify-start">
                          {data.Terms}
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:flex 2xl:justify-center">
        <div className="last-footer border-t-2 mt-4 mb-3">
          <div className="mt-4 flex items-center justify-between text-sm mx-3">
            <span>
              <h1>© 2025 Sun Tower</h1>
            </span>
            <span>
              <h1>
                DevelopBy
                <a
                  className="text-purple-950 font-bold cursor-pointer"
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                >
                  {" "}
                  Sajad Danish
                </a>
              </h1>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
