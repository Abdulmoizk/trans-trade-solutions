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
                        About us
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg max-w-6xl font-medium leading-relaxed">
                        At Trans Trade Solutions, we are driven by a passion for efficiency, reli-
                        ability and innovation in the world of supply chain. We have emerged
                        as a leading player in the industry, committed to delivering tailored soluitions that meet the evolving needs of our client.
                        <br />
                        <br />
                        Our Services in the Market are not Limited to Pakistan Trade but also specialized in Transit Trade movements that cover Afghanistan, Uzbekistan and all CIS/Landlocked countries. We have set ourselves to offer full range of flexible logistics services At competitive and economical rates accross the globe through a network of reliable overseas agents and associates.
                    </p>
                </div>
            </section>
            {/* Our Mission Section */}
            <section className="flex flex-col-reverse md:flex-row items-center gap-10 mx-auto max-w-7xl px-4 py-16">
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1850A0]">
                        Our Mission
                    </h1>
                    <p className="text-base sm:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
                        At Trans Trade Solutions, our vision is to be a global leader in logistics solutions,
                        recognized for our innovation, reliability, and commitment to sustainability. We strive
                        to seamlessly connect businesses and communities through efficient supply chain
                        management, leveraging cutting-edge technology and industry expertise. Our goal is
                        to create a world where goods move freely and efficiently, empowering our partners
                        to thrive in a dynamic marketplace.
                    </p>
                </div>

                <div className="w-full md:w-1/2 relative">
                    <div className="absolute bottom-16 -left-10 z-10 hidden md:block">
                        <Image
                            src="/2.jpg"
                            alt="Overlay mission image"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="relative z-0">
                        <Image
                            src="/1.jpg"
                            alt="Main mission image"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-xl h-[500px] w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="flex flex-col md:flex-row items-center gap-10 mx-auto max-w-7xl px-4 py-16">
                <div className="w-full md:w-1/2 relative">
                    <div className="absolute bottom-16 -left-10 z-10 hidden md:block">
                        <Image
                            src="/5.jpg"
                            alt="Core values overlay"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="relative z-0">
                        <Image
                            src="/1.jpg"
                            alt="Core values main"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-xl h-[500px] w-full object-cover"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1850A0]">
                        Our Core Values
                    </h2>
                    <ul className="space-y-6 text-gray-700 text-base sm:text-lg lg:text-xl font-medium">
                        <li>
                            <h3 className="text-xl sm:text-2xl font-semibold text-[#1850A0]">Integrity</h3>
                            <p>
                                We uphold the highest ethical standards in all our interactions, fostering trust
                                with our clients, partners, and employees.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-xl sm:text-2xl font-semibold text-[#1850A0]">Customer Focus</h3>
                            <p>
                                We prioritize our customers’ needs, delivering tailored solutions that ensure
                                satisfaction and build long-term relationships.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-xl sm:text-2xl font-semibold text-[#1850A0]">Innovation</h3>
                            <p>
                                We embrace technology and creative thinking to enhance our services, continually
                                seeking new ways to improve efficiency and effectiveness.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Background Expertise Section */}
<section className="relative w-full h-[100vh] md:h-[500px] lg:h-[600px] bg-black/90">
    {/* Background Image with Fixed Position */}
    <div
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-30"
        style={{ backgroundImage: "url('/bg.jpg')" }}
    />
    {/* Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4">
            Expertise & Experience
        </h2>
        <p className="text-sm sm:text-base lg:text-lg max-w-3xl font-medium leading-relaxed">
            With over a decade of industry experience, Trans Trade Solutions boasts a seasoned
            team of supply chain professionals with deep expertise across various sectors and
            geographies. Our services extend beyond Freight Forwarding to include Customs
            Clearance, Inland Transportation, and Indenting. We have the knowledge and
            resources to deliver exceptional results.
        </p>
    </div>
</section>

        </main>
    );
}
