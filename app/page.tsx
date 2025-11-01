import Card from "@/components/Card";
import Image from "next/image";
import { specialFeaturesData } from "@/constants/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="relative w-full bg-black mt-[72px] sm:mt-[80px]">
        <div className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] overflow-hidden">
          <Image
            src="/main.jpg"
            alt="background"
            fill
            className="object-cover animate-ken-burns"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-8 sm:py-12 md:py-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Supply Chain Excellence
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-200">
              Connecting Borders with Efficient Logistics
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl font-medium text-gray-200">
              Combining global logistics expertise with efficient customs clearance, we deliver end-to-end freight solutions you can trust.
            </p>
            <Link 
              href="/contact" 
              className="mt-8 px-8 py-3 bg-[#ED2228] text-white rounded-full hover:bg-[#c01f2e] transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="flex flex-col md:flex-row items-center md:items-start mx-auto max-w-7xl px-4 gap-12">
          <div className="my-auto md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#ED2228] font-bold">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              At Trans Trade Solutions, our vision is to be a global leader in
              supply chain solutions, recognized for our innovation, reliability, and
              commitment to sustainability. We strive to seamlessly connect businesses worldwide.
            </p>
            <Link 
              href="/our-mission" 
              className="inline-block px-6 py-3 bg-[#ED2228] text-white rounded-full hover:bg-[#c01f2e] transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium"
            >
              Learn More
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/mission.jpg"
              alt="mission"
              width={1000}
              height={1000}
              className="rounded-xl shadow-xl object-cover hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#ED2228] font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We provide a complete platform of innovative, sustainable, and comprehensive solutions for the development of foreign trade in the global market.
            </p>
          </div>
          <Card />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="flex flex-col md:flex-row items-center md:items-start mx-auto max-w-7xl px-4 gap-12">
          <div className="md:w-1/2">
            <Image
              src="/special.jpg"
              alt="special features"
              width={1000}
              height={1000}
              className="rounded-xl shadow-xl object-cover hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          <div className="my-auto md:w-1/2 space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ED2228]">
              What makes us special
            </h1>
            <div className="space-y-6">
              {specialFeaturesData.map((item) => (
                <div key={item.id} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 p-3 bg-[#ED2228]/10 rounded-lg group-hover:bg-[#ED2228]/20 transition-colors duration-300">
                    {item.img}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
