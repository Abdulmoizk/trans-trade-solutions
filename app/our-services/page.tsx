import { shippingServicesData } from "@/data/data";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="overflow-x-hidden">
            <section className="relative w-full h-[100vh] md:h-[500px] lg:h-[600px]">
                <Image
                    src="/bg.jpg"
                    alt="Expertise background"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4">
                        Our Services
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg max-w-6xl font-medium leading-relaxed">
                    We provide a complete platform of service innovative, sustainable and
comprehensive solutions for the development of foreign trade
in the local market.
  </p>
                </div>
            </section>
            {/* Our Mission Section */}
            {shippingServicesData.map((item, index) => (

            <section key={index} className="flex flex-col-reverse md:flex-row items-center gap-10 mx-auto max-w-7xl px-4 py-16">
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1850A0]">
                        {item.title}
                    </h1>
                    <p className="text-base sm:text-xl lg:text-2xl max-w-3xl text-gray-700 font-medium leading-relaxed"
                    dangerouslySetInnerHTML={{
                        __html: item.content,
                    }}
                    />
                </div>

               
                    <div className=" z-10 ">
                        <Image
                            src="/2.jpg"
                            alt="Overlay mission image"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                   
            </section>
            ))}


        </main>
    );
}
