import Image from "next/image";

export default function CareersPage() {
    return (
        <main className="overflow-x-hidden">
            <div className="relative w-full bg-black mt-[72px] sm:mt-[80px]">
                <div className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] overflow-hidden">
                    <Image
                        src="/career.jpg"
                        alt="Careers background"
                        fill
                        className="object-cover animate-ken-burns"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-8 sm:py-12 md:py-16">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            Join Trans Trade Solutions
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl font-bold">
                            At Trans Trade Solutions, your contribution truly makes a difference. Explore exciting career opportunities with us and help shape the future of logistics and international freight forwarding.
                        </p>
                    </div>
                </div>
            </div>

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="text-center space-y-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ED2228]">
                        NO MATTER WHAT YOU DO, YOUR CONTRIBUTION MAKES A DIFFERENCE
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto">
                        Trans Trade Solutions has been a leader in the logistics industry for many years. We consistently strive to conduct our business ethically and recognize that our products and services have a positive impact on society and the global market.
                    </p>
                </div>
            </section>

            <section className="bg-gray-50 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#ED2228] mb-16">
                        Why Work with Trans Trade Solutions?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-6">
                            <h3 className="text-2xl font-semibold text-[#ED2228]">Work Environment</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                At Trans Trade Solutions, we offer our employees a vibrant, diverse, and friendly work environment where professional growth and career advancement are our top priorities. The expertise of our teams is at the heart of our success.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-6">
                            <h3 className="text-2xl font-semibold text-[#ED2228]">Culture</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We foster a workplace where management values input, celebrates events, welcomes newcomers, and creates a fun, collaborative atmosphere. We care about each individual and their well-being.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-6">
                            <h3 className="text-2xl font-semibold text-[#ED2228]">Learning & Development</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We prioritize the growth and success of our employees. Our commitment to ongoing learning and development helps foster a culture that esteems expertise and promotes innovation.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-6">
                            <h3 className="text-2xl font-semibold text-[#ED2228]">Diversity & Inclusion</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We embrace diversity and inclusion, fostering a culture where every voice is heard and every perspective is respected. Our commitment is to create a workplace that reflects a variety of backgrounds and experiences.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-6">
                            <h3 className="text-2xl font-semibold text-[#ED2228]">Compensation & Benefits</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We offer a fair and transparent compensation structure that aligns with your role and performance. Your compensation package will reflect your responsibilities, the effectiveness with which you fulfill them, and the value you bring to the company.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-6">
                            <h3 className="text-2xl font-semibold text-[#ED2228]">Job Openings</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Trans Trade Solutions offers diverse career opportunities across various levels in logistics and international freight forwarding. We have openings in Supply Chain, Documentation, Consolidation, Customer Services, and more. Our Trainee Development Program trains fresh graduates to become logistics experts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 text-white text-center relative bg-black/90">
                <div
                    className="absolute inset-0 bg-cover bg-fixed bg-center opacity-30"
                    style={{ backgroundImage: "url('/careerbg.jpg')" }}
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-2xl mb-12 text-gray-200">
                        If you have the skills and passion to join our team, we&apos;d love to hear from you.
                    </p>
                    <a
                        href="mailto:hr@transtrade.pk"
                        className="inline-block px-8 py-4 bg-[#ED2228] text-white text-lg font-semibold rounded-full hover:bg-[#c01f2e] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        Submit Your Resume
                    </a>
                </div>
            </section>
        </main>
    );
}
