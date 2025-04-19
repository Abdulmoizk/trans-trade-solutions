import Card from "@/components/Card";
import Image from "next/image";
import { specialFeaturesData } from "@/data/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="relative">
        <div className="relative w-screen h-screen md:h-[500px] lg:h-[600px]">
          <Image
            src="/main.jpg"
            alt="background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-8xl font-bold mb-4">Shipping</h1>
          <h2 className="text-2xl md:text-5xl mb-3 font-bold">
            We handle giants of the world
          </h2>
          <p className="text-lg md:text-sm max-w-80 font-bold">
            With a global network and advanced logistics solutions, our freight
            services provide.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start mx-auto max-w-7xl p-4 pt-24">
        <div className="my-auto md:w-1/2 p-4">
          <h1 className="text-4xl md:text-7xl text-[#1850A0] font-bold mb-4">
            Our Mission
          </h1>
          <p className="text-2xl md:text-4xl mb-3 font-bold">
            At Trans Trade Solutions, our vision is to be a global leader in
            logistics solutions, recognized for our innovation, reliability, and
            commitment to sustainability. We strive to seamlessly connect...
          </p>
          <Link href="/our-mission" className="mt-4 px-4 py-2 bg-[#1850A0] text-white">
            More Details
          </Link>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center items-center">
          <Image
            src="/mission.jpg"
            alt="mission"
            width={1000}
            height={1000}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="m-5" />

      <div className="mx-auto max-w-7xl sm:p-4 pt-24">
        <h1 className="text-4xl md:text-7xl text-center text-[#1850A0] font-bold mb-4">
          Our Services
        </h1>
        <p className="text-xl text-center md:text-3xl mb-3 font-semibold">We provide a complete platform of service innovative, sustainable and
          comprehensive solutions for the development of foreign trade
          in the local market.</p>
        <Card />
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start mx-auto max-w-7xl p-4">
        <div className="md:w-1/2 p-4 flex justify-center items-center">
          <Image
            src="/special.jpg"
            alt="mission"
            width={1000}
            height={1000}
            className="rounded-lg shadow-lg object-cover"
          />

        </div>
        <div className="my-auto md:w-1/2 p-4">
          <h1 className="text-2xl md:text-5xl mb-4 font-bold text-[#1850A0]">
            What Makes Us Special
          </h1>
          {specialFeaturesData.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <div className="flex items-start justify-center mr-4">
                {item.img}
              </div>
              <p className="text-base font-semibold">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
