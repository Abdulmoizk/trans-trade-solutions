import Image from "next/image";

export default function CareersPage() {
    return (
        <main className="overflow-x-hidden">
            <div className="relative mt-[80px] sm:mt-[100px] lg:mt-[120px]">
                <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
                    <Image
                        src="/career.jpg"
                        alt="Careers background"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
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
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
                        Trans Trade Solutions has been a leader in the logistics industry for many years. We consistently strive to conduct our business ethically and recognize that our products and services have a positive impact on society and the global market.
                    </p>
                </div>
            </section>

            <section className="bg-gray-100 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#ED2228] mb-12">
                        Why Work with Trans Trade Solutions?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-[#fff]">Work Environment</h3>
                            <p className="text-lg text-gray-700">
                                At Trans Trade Solutions, we offer our employees a vibrant, diverse, and friendly work environment where professional growth and career advancement are our top priorities. The expertise of our teams is at the heart of our success.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-[#fff]">Culture</h3>
                            <p className="text-lg text-gray-700">
                                We foster a workplace where management values input, celebrates events, welcomes newcomers, and creates a fun, collaborative atmosphere. We care about each individual and their well-being.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-[#fff]">Learning & Development</h3>
                            <p className="text-lg text-gray-700">
                                We prioritize the growth and success of our employees. Our commitment to ongoing learning and development helps foster a culture that esteems expertise and promotes innovation.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-[#fff]">Diversity & Inclusion</h3>
                            <p className="text-lg text-gray-700">
                                We embrace diversity and inclusion, fostering a culture where every voice is heard and every perspective is respected. Our commitment is to create a workplace that reflects a variety of backgrounds and experiences.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-[#fff]">Compensation & Benefits</h3>
                            <p className="text-lg text-gray-700">
                                We offer a fair and transparent compensation structure that aligns with your role and performance. Your compensation package will reflect your responsibilities, the effectiveness with which you fulfill them, and the value you bring to the company.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-[#fff]">Job Openings</h3>
                            <p className="text-lg text-gray-700">
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
                <div className="relative z-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-2xl mb-8">
                        If you have the skills and passion to join our team, we’d love to hear from you.
                    </p>
                    <a
                        href="mailto:hr@transtrade.pk"
                        className="px-8 py-4 bg-white text-[#fff] text-lg font-semibold rounded-full hover:bg-[#e6e7e9] transition"
                    >
                        Submit Your Resume
                    </a>
                </div>
            </section>
        </main>
    );
}
