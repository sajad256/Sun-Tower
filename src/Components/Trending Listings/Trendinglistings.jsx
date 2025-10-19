import React from "react";
import { trendingListings } from "../Constant/Constant";

export default function Trendinglistings() {
  return (
    <section>
      <div className="info text-center">
        <h1 className="font-bold text-2xl">Trending Listings</h1>
      </div>

      <div className="Main-for-btn flex items-center justify-center gap-4 pt-5">
        <div className="All">
          <button className="px-4 py-1 rounded-full border text-sm bg-[#D88946] text-white">
            All
          </button>
        </div>
        <div className="Apartments">
          <button className="px-2 py-1 rounded-full border text-sm">
            Apartments
          </button>
        </div>
        <div className="Houses">
          <button className="px-2 py-1 rounded-full border text-sm">
            Houses
          </button>
        </div>
      </div>

      <div className="Main-for-Cards pt-10">
        <div className="second mx-3 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4 xl:max-w-[1200px] xl:mx-auto">
          {trendingListings.map((data, index) => {
            const Staricon = data.starIcon;
            const Bathroomicon = data.bathroomIcon;
            const Caricon = data.carIcon;
            const Rulericon = data.rulerIcon;
            const Phoneicon = data.phoneIcon;
            const WhatsappIcon = data.whatsappIcon;

            return (
              <div key={index} className="Card border mt-4 rounded-xl">
                <div className="img">
                  <img src={data.img} alt="" className="w-full h-auto" />
                </div>

                <div className="title-and-rating mx-2 flex items-center justify-between pt-3 xl:pt-7">
                  <div className="title">
                    <h1 className="font-bold">{data.title}</h1>
                  </div>
                  <div className="rateing flex items-center gap-1">
                    <span>
                      <p>{data.rateing}</p>
                    </span>
                    <Staricon className="text-[#FACC15]" />
                  </div>
                </div>

                <div className="location mx-2 pt-2">
                  <p className="text-gray-400">{data.location}</p>
                </div>

                <div className="Main-for-house-info-and-call-center pt-2 flex items-center justify-between mx-2 pb-2 xl:pb-7">
                  <div className="Main-for-house-info flex items-center gap-1">
                    <div className="bathroom flex items-center gap-1">
                      <span>
                        <Bathroomicon className="text-gray-500" />
                      </span>
                      <p className="text-gray-500">{data.bathroom}</p>
                    </div>
                    <div className="parking flex items-center gap-1">
                      <span>
                        <Caricon className="text-gray-500" />
                      </span>
                      <p className="text-gray-500">{data.car}</p>
                    </div>
                    <div className="house-size flex items-center gap-1">
                      <span>
                        <Rulericon className="text-gray-500" />
                      </span>
                      <p className="text-gray-500">{data.size}</p>
                    </div>
                  </div>
                  <div className="Main-for-Call-and-WhatsApp flex items-center gap-1">
                    <div className="call flex items-center gap-1 bg-[#D88946] text-white px-2 py-1 rounded-sm">
                      <span>
                        <Phoneicon size={15} />
                      </span>
                      <p className="text-sm">{data.call}</p>
                    </div>
                    <div className="whatsapp flex items-center gap-1 bg-[#D88946] text-white px-2 py-1 rounded-sm">
                      <span>
                        <WhatsappIcon size={15} />
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
  );
}
