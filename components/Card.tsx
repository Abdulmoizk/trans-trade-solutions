import React from "react";
import { shippingServicesData } from "../data/data";
import { Truck, Shield, Globe, Search, Layers } from "lucide-react"; // Import icons
import Link from "next/link";

// Define a type for the available icon names
type IconType = "Truck" | "Shield" | "Globe" | "Search" | "Layers";

const Card = () => {
  // Map the icon type to the respective component
  const iconMap: Record<IconType, JSX.Element> = {
    Truck: <Truck className="w-12 h-12 text-white" />,
    Shield: <Shield className="w-12 h-12 text-white" />,
    Globe: <Globe className="w-12 h-12 text-white" />,
    Search: <Search className="w-12 h-12 text-white" />,
    Layers: <Layers className="w-12 h-12 text-white" />,
  };

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
            style={{ backgroundImage: `url('${item.img}')` }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10 transition-all duration-300" />

          {/* Card Content */}
          <div className="relative z-20 flex flex-col justify-between h-full p-6 text-white">
            <div className="flex flex-col items-center justify-center flex-grow text-center gap-4">
              {/* Icon */}
              {iconMap[item.icon as IconType]}

              {/* Title */}
              <h2 className="text-xl font-bold leading-snug">{item.title}</h2>

              {/* Short Description */}
              <p className="text-sm font-medium">{item.shortDescription}</p>

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
