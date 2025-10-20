import React from "react";
import { PropertiesforSale_Rent } from "../Constant/Constant";

export default function Preperties() {
  return (
    <>
      <section>
        {/* Sale Info */}
        <div className="Sale-Info text-center mt-6">
          <h1 className="font-bold text-xl md:text-3xl lg:text-4xl ">
            Recent Properties for Sale
          </h1>
          <p className="pt-1">Lorem ipsum dolor sit.</p>
        </div>
        {/* Main for Properties */}
        <div className="Main-for-Properties mt-5 xl:mx-10">
          <div className="second container md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3">
            {PropertiesforSale_Rent.map((data, index) => {
              const Staricon = data.starIcon;
              const Bathroomicon = data.bathroomIcon;
              const Caricon = data.carIcon;
              const Rulericon = data.rulerIcon;
              const Phoneicon = data.phoneIcon;
              const Whatsappicon = data.whatsappIcon;
              return (
                <div className="box mt-3 border rounded-lg">
                  <div className="img">
                    <img className="w-100% h-auto" src={data.img} alt="" />
                  </div>
                  {/* Title and Rateing */}
                  <div className="title-and-ratring container flex items-center justify-between pt-4">
                    <div className="title">
                      <h1 className="text-lg =">{data.title}</h1>
                    </div>
                    <div className="rateting flex items-center gap-1">
                      <span>
                        <p>{data.rateing}</p>
                      </span>
                      <Staricon className="text-[#FACC15]" />
                    </div>
                  </div>
                  <div className="location container">
                    <p className="= pt-2">{data.location}</p>
                  </div>
                  {/* Main for icons and call and Whatsapp */}
                  <div className="Main flex justify-between mx-1 pt-3 pb-2 xl:mx-5">
                    <div className="Main-for-bath-car-house-size  flex items-center gap-2">
                      <div className="bathrooms flex items-center gap-1">
                        <span>
                          <Bathroomicon className="text-gray-500" size={15} />
                        </span>
                        <p className="text-sm text-gray-500">{data.bathroom}</p>
                      </div>
                      <div className="car flex items-center gap-1">
                        <span>
                          <Caricon className="text-gray-500" size={15} />
                        </span>
                        <p className="text-sm text-gray-500">{data.car}</p>
                      </div>
                      <div className="house-size flex items-center gap-1">
                        <span>
                          <Rulericon className="text-gray-500" size={15} />
                        </span>
                        <p className="text-sm text-gray-500">{data.size}</p>
                      </div>
                    </div>
                    <div className="Main-for-call-and-whatsapp flex  gap-1">
                      <div className="Call flex items-center bg-[#D88946] py-2 px-2 rounded-lg text-white gap-1">
                        <span>
                          <Phoneicon size={15} />
                        </span>
                        <p className="text-sm">{data.call}</p>
                      </div>
                      <div className="whatsapp flex items-center bg-[#D88946] py-2 px-2 rounded-lg text-white gap-1">
                        <span>
                          <Whatsappicon size={15} />
                        </span>
                        <p className="text-sm">{data.whatsapp}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Rent Info */}
        <div className="Sale-Info text-center mt-12">
          <h1 className="font-bold text-xl md:text-3xl lg:text-4xl ">
            Recent Properties for Rent
          </h1>
          <p className="pt-1">Lorem ipsum dolor sit.</p>
        </div>
        {/* Main for Properties */}
        <div className="Main-for-Properties mt-5 xl:mx-10">
          <div className="second container md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3">
            {PropertiesforSale_Rent.map((data, index) => {
              const Staricon = data.starIcon;
              const Bathroomicon = data.bathroomIcon;
              const Caricon = data.carIcon;
              const Rulericon = data.rulerIcon;
              const Phoneicon = data.phoneIcon;
              const Whatsappicon = data.whatsappIcon;
              return (
                <div className="box mt-3 border rounded-lg">
                  <div className="img">
                    <img className="w-100% h-auto" src={data.img} alt="" />
                  </div>
                  {/* Title and Rateing */}
                  <div className="title-and-ratring container flex items-center justify-between pt-4">
                    <div className="title">
                      <h1 className="text-lg =">{data.title}</h1>
                    </div>
                    <div className="rateting flex items-center gap-1">
                      <span>
                        <p>{data.rateing}</p>
                      </span>
                      <Staricon className="text-[#FACC15]" />
                    </div>
                  </div>
                  <div className="location container">
                    <p className="= pt-2">{data.location}</p>
                  </div>
                  {/* Main for icons and call and Whatsapp */}
                  <div className="Main flex justify-between mx-1 pt-3 pb-2 xl:mx-5">
                    <div className="Main-for-bath-car-house-size  flex items-center gap-2">
                      <div className="bathrooms flex items-center gap-1">
                        <span>
                          <Bathroomicon className="text-gray-500" size={15} />
                        </span>
                        <p className="text-sm text-gray-500">{data.bathroom}</p>
                      </div>
                      <div className="car flex items-center gap-1">
                        <span>
                          <Caricon className="text-gray-500" size={15} />
                        </span>
                        <p className="text-sm text-gray-500">{data.car}</p>
                      </div>
                      <div className="house-size flex items-center gap-1">
                        <span>
                          <Rulericon className="text-gray-500" size={15} />
                        </span>
                        <p className="text-sm text-gray-500">{data.size}</p>
                      </div>
                    </div>
                    <div className="Main-for-call-and-whatsapp flex  gap-1">
                      <div className="Call flex items-center bg-[#D88946] py-2 px-2 rounded-lg text-white gap-1">
                        <span>
                          <Phoneicon size={15} />
                        </span>
                        <p className="text-sm">{data.call}</p>
                      </div>
                      <div className="whatsapp flex items-center bg-[#D88946] py-2 px-2 rounded-lg text-white gap-1">
                        <span>
                          <Whatsappicon size={15} />
                        </span>
                        <p className="text-sm">{data.whatsapp}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
