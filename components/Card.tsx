import React from "react";
import { shippingServicesData } from "@/constants/data";
import { Truck, Search, Layers, Ship, Calculator, ArrowLeftRight } from "lucide-react"; 
import Link from "next/link";

type IconType = "Truck" | "Shield" | "Globe" | "Search" | "Layers" | "Ship";

const Card = () => {
  const iconMap: Record<IconType, JSX.Element> = {
    Truck: <Truck className="w-12 h-12 text-white" />,
    Shield: <Calculator className="w-12 h-12 text-white" />,
    Globe: <ArrowLeftRight className="w-12 h-12 text-white" />,
    Search: <Search className="w-12 h-12 text-white" />,
    Layers: <Layers className="w-12 h-12 text-white" />,
    Ship: <Ship className="w-12 h-12 text-white" />,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {shippingServicesData.map((item) => (
        <div
          key={item.id}
          className="relative h-[420px] w-full rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url('${item.img}')` }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10 transition-all duration-300 group-hover:from-black/80 group-hover:via-black/70 group-hover:to-black/90" />

          <div className="relative z-20 flex flex-col justify-between h-full p-8 text-white">
            <div className="flex flex-col items-center justify-center flex-grow text-center gap-6">
              <div className="p-4 bg-[#ED2228]/90 rounded-full group-hover:bg-[#ED2228] transition-colors duration-300">
                {iconMap[item.icon as IconType]}
              </div>

              <h2 className="text-2xl font-bold leading-snug">{item.title}</h2>

              <p className="text-base font-medium text-gray-200">{item.shortDescription}</p>

              <Link 
                href={`/our-services?service=${item.id}`} 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#ED2228] rounded-full hover:bg-[#c01f2e] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
