import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="overflow-x-hidden bg-white">
            {/* Modern Hero Section */}
            <section className="relative w-full mt-[120px] sm:mt-[128px] min-h-[60vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ED2228]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ED2228]/5 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center max-w-5xl mx-auto space-y-8">
                        <div className="inline-block px-4 py-2 bg-[#ED2228]/10 rounded-full border border-[#ED2228]/20">
                            <span className="text-sm font-semibold text-[#ED2228] uppercase tracking-wider">About Us</span>
                        </div>
                        
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-none tracking-tight">
                            About Us
                        </h1>
                        
                        <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                            <p>
                                At Trans Trade Solutions, we are driven by a passion for efficiency, reliability and innovation in the world of supply chain. We have emerged as a leading player in the industry, committed to delivering tailored solutions that meet the evolving needs of our client.
                            </p>
                            <p>
                                Our Services in the Market are not Limited to Pakistan Trade but also specialized in Transit Trade movements that cover Afghanistan, Uzbekistan and all CIS/Landlocked countries. We have set ourselves to offer full range of flexible logistics services at competitive and economical rates across the globe through a network of reliable overseas agents and associates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Mission Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#ED2228]/5 rounded-full blur-3xl"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image Section */}
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute -left-8 -top-8 w-full h-full border-2 border-[#ED2228]/20 rounded-3xl"></div>
                            <div className="relative rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src={"/mission.jpg"}
                                    alt="Our Mission"
                                    width={700}
                                    height={700}
                                    className="object-cover w-full h-[500px]"
                                />
                            </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-block px-4 py-2 bg-[#ED2228]/10 rounded-full border border-[#ED2228]/20">
                                <span className="text-sm font-semibold text-[#ED2228] uppercase tracking-wider">Our Mission</span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                                Our Mission
                            </h2>
                            
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                At Trans Trade Solutions, our vision is to be a global leader in logistics solutions,
                                recognized for our innovation, reliability, and commitment to sustainability. We strive
                                to seamlessly connect businesses and communities through efficient supply chain
                                management, leveraging cutting-edge technology and industry expertise. Our goal is
                                to create a world where goods move freely and efficiently, empowering our partners
                                to thrive in a dynamic marketplace.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Core Values Section */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ED2228]/5 rounded-full blur-3xl"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content Section */}
                        <div className="space-y-8 order-2 lg:order-1">
                            <div className="inline-block px-4 py-2 bg-[#ED2228]/10 rounded-full border border-[#ED2228]/20">
                                <span className="text-sm font-semibold text-[#ED2228] uppercase tracking-wider">Our Core Values</span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                                Our Core Values
                            </h2>
                            
                            <div className="space-y-8">
                                <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#ED2228]/30 hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-2xl font-black text-[#ED2228] mb-3">Integrity</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        We uphold the highest ethical standards in all our interactions, fostering trust
                                        with our clients, partners, and employees.
                                    </p>
                                </div>
                                
                                <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#ED2228]/30 hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-2xl font-black text-[#ED2228] mb-3">Customer Focus</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        We prioritize our customer&apos;s needs, delivering tailored solutions that ensure
                                        satisfaction and build long-term relationships.
                                    </p>
                                </div>
                                
                                <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#ED2228]/30 hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-2xl font-black text-[#ED2228] mb-3">Innovation</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        We embrace technology and creative thinking to enhance our services, continually
                                        seeking new ways to improve efficiency and effectiveness.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Image Section */}
                        <div className="relative order-1 lg:order-2">
                            <div className="absolute -right-8 -bottom-8 w-full h-full border-2 border-[#ED2228]/20 rounded-3xl"></div>
                            <div className="relative rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src={"/core.jpg"}
                                    alt="Core Values"
                                    width={700}
                                    height={700}
                                    className="object-cover w-full h-[600px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Expertise Section */}
            <section className="relative w-full min-h-[500px] bg-gradient-to-br from-[#ED2228] to-[#c01f2e] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/aboutbg.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-24 min-h-[500px]">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                            <span className="text-sm font-semibold text-white uppercase tracking-wider">Experience</span>
                        </div>
                        
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                            Expertise & Experience
                        </h2>
                        
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                            With over a decade of industry experience, Trans Trade Solutions boasts a seasoned
                            team of supply chain professionals with deep expertise across various sectors and
                            geographies. Our services extend beyond Freight Forwarding to include Customs
                            Clearance, Inland Transportation, and Indenting. We have the knowledge and
                            resources to deliver exceptional results.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
