import React from "react";

export default function Parking() {
  return (
    <>
      <section className="bg-[url('/footer-img.png')] bg-cover bg-center h-[400px] 2xl:h-[990px] w-full flex items-center justify-center md:justify-start mt-32">
        <div className="info bg-black/50 backdrop-blur-md border  rounded-2xl text-white mx-5 md:w-[400px]">
          <div className="title p-3">
            <h1 className="text-lg font-bold md:text-xl xl:text-2xl">
              Own commercial parking? Earn Money By Hosting
            </h1>
          </div>
          <div className="detail p-3">
            <p className="text-white text-sm md:text-base">
              Earn money by hosting your parking space. Start renting it out
              today and generate passive income.
            </p>
          </div>
          <div className="btn p-4">
            <button className="bg-[#FD3D00] px-3 py-3 rounded-md">
              Start Renting
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
