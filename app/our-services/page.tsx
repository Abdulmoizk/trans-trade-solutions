import ScrollToService from "@/components/scrollToService";
import { shippingServicesData } from "@/data/data";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <main className="overflow-x-hidden">
            <ScrollToService />
            <section className="relative w-full h-[100vh] md:h-[500px] lg:h-[600px]">
                <Image
                    src="/service.jpg"
                    alt="Expertise background"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4">
                        Our Services
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg max-w-4xl font-medium leading-relaxed">
                        We provide a comprehensive platform of innovative, sustainable, and tailored logistics solutions to support foreign trade across global markets.
                    </p>
                </div>
            </section>

            {shippingServicesData.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                    <section
                        id={`service-${item.id}`}
                        key={item.id}
                        className={`flex flex-col-reverse ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 max-w-7xl px-4 py-20 mx-auto`}
                    >
                        {/* Text */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1850A0]">
                                {item.title}
                            </h2>
                            <div className="space-y-4">
                                {item.content.map((paragraph, idx) => (
                                    <p
                                        key={idx}
                                        className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium leading-relaxed"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-center">
                            <Image
                                src={item.img || "/fallback.jpg"}
                                alt={`${item.title} image`}
                                width={500}
                                height={400}
                                className="rounded-xl shadow-xl object-cover"
                            />
                        </div>
                    </section>
                );
            })}
        </main>
    );
}
