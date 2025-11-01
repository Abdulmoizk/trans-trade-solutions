import ScrollToService from "@/components/ScrollToService";
import { shippingServicesData } from "@/constants/data";
import Image from "next/image";
import { Suspense } from "react";

export default function ServicesPage() {
    return (
        <div className="overflow-x-hidden bg-white">
            <Suspense fallback={null}>
                <ScrollToService />
            </Suspense>
            
            {/* Modern Hero Section */}
            <section className="relative w-full mt-[120px] sm:mt-[128px] min-h-[60vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ED2228]/5 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <div className="inline-block px-4 py-2 bg-[#ED2228]/10 rounded-full border border-[#ED2228]/20">
                            <span className="text-sm font-semibold text-[#ED2228] uppercase tracking-wider">Our Services</span>
                        </div>
                        
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-none tracking-tight">
                            Comprehensive
                            <span className="block text-[#ED2228] mt-2">Logistics Solutions</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            We provide a comprehensive platform of innovative, sustainable, and tailored logistics solutions to support foreign trade across global markets.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Details */}
            {shippingServicesData.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                    <section
                        id={`service-${item.id}`}
                        key={item.id}
                        className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} relative overflow-hidden`}
                    >
                        <div className={`absolute ${isEven ? 'top-0 right-0' : 'bottom-0 left-0'} w-[500px] h-[500px] bg-[#ED2228]/5 rounded-full blur-3xl`}></div>
                        
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                                {/* Content Section */}
                                <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:col-start-2 lg:order-2'}`}>
                                    <div className="inline-block px-4 py-2 bg-[#ED2228]/10 rounded-full border border-[#ED2228]/20">
                                        <span className="text-sm font-semibold text-[#ED2228] uppercase tracking-wider">Service {item.id}</span>
                                    </div>
                                    
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                                        {item.title}
                                    </h2>
                                    
                                    <div className="space-y-4">
                                        {item.content.map((paragraph, idx) => (
                                            <p
                                                key={idx}
                                                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className={`relative ${isEven ? 'lg:order-2' : 'lg:col-start-1 lg:row-start-1 lg:order-1'}`}>
                                    <div className={`absolute ${isEven ? '-right-8 -bottom-8' : '-left-8 -top-8'} w-full h-full border-2 border-[#ED2228]/20 rounded-3xl`}></div>
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={item.img || "/fallback.jpg"}
                                            alt={`${item.title} service illustration`}
                                            width={700}
                                            height={700}
                                            className="object-cover w-full h-[500px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
