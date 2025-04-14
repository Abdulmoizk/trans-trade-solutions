import React from "react";
import { shippingServicesData } from "../data/data";
import { Truck } from "lucide-react"; // Optional: replace with different icons if needed
import Link from "next/link";

const Card = () => {

 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {shippingServicesData.map((item, index) => (
        <div
          key={index}
          className="relative h-[420px] w-full rounded-xl overflow-hidden group shadow-lg"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url('/bg.jpg')` }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10 transition-all duration-300" />

          {/* Card Content */}
          <div className="relative z-20 flex flex-col justify-between h-full p-6 text-white">
            <div className="flex flex-col items-center justify-center flex-grow text-center gap-4">
              {/* Icon */}
              <Truck className="w-24 h-24 text-white" strokeWidth="1.0" />

              {/* Title */}
              <h2 className="text-xl font-bold leading-snug">{item.title}</h2>
              <Link href={`/our-services?service=${item.id}`} className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#D72638] rounded-full hover:bg-[#c01f2e] transition">
                See More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
