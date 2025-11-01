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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {shippingServicesData.map((item) => (
        <div
          key={item.id}
          className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#ED2228] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
          {/* Image Section */}
          <div className="relative h-64 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${item.img}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            {/* Icon Overlay */}
            <div className="absolute top-6 left-6">
              <div className="w-14 h-14 bg-[#ED2228] rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {iconMap[item.icon as IconType]}
              </div>
            </div>
            
            {/* Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-black text-white leading-tight">{item.title}</h3>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-6 space-y-4">
            <p className="text-gray-600 leading-relaxed line-clamp-2">
              {item.shortDescription}
            </p>
            
            <Link 
              href={`/our-services?service=${item.id}`} 
              className="inline-flex items-center gap-2 text-[#ED2228] font-bold hover:gap-3 transition-all duration-300 group/link"
            >
              Learn More
              <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          {/* Hover Border Effect */}
          <div className="absolute inset-0 border-2 border-[#ED2228] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
};

export default Card;
