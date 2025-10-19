import React from "react";
import { latestProject } from "../Constant/Constant"; // adjust path if needed

export default function Projects() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Title + Description */}
        <div className="max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Discover the latest projects
          </h2>
          <p className="text-gray-600">
            Take a deep dive and browse homes for sale, original photos,
            resident reviews and local insights to find what is right for you.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {latestProject.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group h-[400px]"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.town}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Transparent bottom section */}
              <div className="absolute bottom-4 left-0 w-[90%] mx-4 bg-black/10 text-white py-3 px-5 flex justify-between items-center rounded-xl backdrop-blur-sm">
                <h3 className="text-sm">{item.town}</h3>
                <p className="text-sm opacity-80">{item.properties}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
