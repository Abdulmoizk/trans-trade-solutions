import Card from "@/components/Card";
import Image from "next/image";
import { specialFeaturesData } from "@/constants/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* Modern Hero Section with Split Layout */}
      <section className="relative w-full mt-[120px] sm:mt-[128px] min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ED2228]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ED2228]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-[#ED2228]/10 rounded-full border border-[#ED2228]/20">
                <span className="text-sm font-semibold text-[#ED2228] uppercase tracking-wider">Trans Trade Solutions</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight">
                Supply Chain
                <span className="block text-[#ED2228] mt-2">Excellence</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl font-medium">
                Connecting Borders with Efficient Logistics
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Combining global logistics expertise with efficient customs clearance, we deliver end-to-end freight solutions you can trust.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-[#ED2228] text-white font-bold rounded-lg hover:bg-[#c01f2e] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ED2228]/30 hover:-translate-y-1"
                >
                  Get a Quote
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="/our-services" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-[#ED2228] hover:text-[#ED2228] transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#ED2228] to-[#c01f2e] rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/main.jpg"
                  alt="Supply Chain Excellence"
                  width={800}
                  height={800}
                  className="object-cover w-full h-[600px] animate-ken-burns"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Modern Split Layout */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ED2228]/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -left-8 -top-8 w-full h-full border-2 border-[#ED2228]/20 rounded-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/mission.jpg"
                  alt="About Us"
                  width={700}
                  height={700}
                  className="object-cover w-full h-[500px]"
                />
              </div>
            </div>
            
            {/* Content Section */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-[#ED2228]/10 rounded-full border border-[#ED2228]/20">
                <span className="text-sm font-semibold text-[#ED2228] uppercase tracking-wider">About Us</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Driving Global
                <span className="block text-[#ED2228]">Supply Chains</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                At Trans Trade Solutions, our vision is to be a global leader in
                supply chain solutions, recognized for our innovation, reliability, and
                commitment to sustainability. We strive to seamlessly connect businesses worldwide.
              </p>
              
              <Link 
                href="/our-mission" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#ED2228] text-white font-bold rounded-lg hover:bg-[#c01f2e] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 mt-4"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ED2228]/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-[#ED2228]/10 rounded-full border border-[#ED2228]/20 mb-6">
              <span className="text-sm font-semibold text-[#ED2228] uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Comprehensive
              <span className="block text-[#ED2228]">Logistics Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We provide a complete platform of innovative, sustainable, and comprehensive solutions for the development of foreign trade in the global market.
            </p>
          </div>
          <Card />
        </div>
      </section>

      {/* Features Section - Modern Grid Layout */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ED2228]/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#ED2228]/10 rounded-full border border-[#ED2228]/20">
                <span className="text-sm font-semibold text-[#ED2228] uppercase tracking-wider">Why Choose Us</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                What Makes Us
                <span className="block text-[#ED2228]">Special</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience the difference with our innovative approach to logistics and supply chain management.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -right-8 -bottom-8 w-full h-full border-2 border-[#ED2228]/20 rounded-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/special.jpg"
                  alt="Special Features"
                  width={700}
                  height={700}
                  className="object-cover w-full h-[500px]"
                />
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialFeaturesData.map((item, index) => (
              <div 
                key={item.id} 
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#ED2228]/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#ED2228] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <div className="text-white w-8 h-8 flex items-center justify-center">
                    {item.img}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
