import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* section1 */}
      <div className="relative">
        <video className="h-screen w-screen object-cover" autoPlay loop muted>
          <source src="/bgvideo1.mp4" type="video/mp4" />
        </video>
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
      {/* section2 */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="my-auto md:w-1/2 p-4">
          <h1 className="text-4xl md:text-7xl text-[#1850A0] font-bold mb-4">Our Mission</h1>
          <p className="text-2xl md:text-4xl mb-3 font-bold">
            Our mission is to redefine the standards of global shipping through
            innovation, reliability, and sustainability. We are committed to
            delivering exceptional service by providing...
          </p>
          <button className="mt-4 px-4 py-2 bg-[#1850A0] text-white ">
            More Details
          </button>
        </div>
        <div className="relative left-20 md:w-1/2 p-4">
          <div className="z-10 absolute bottom-20 -left-20 transform translate-x-4 -translate-y-4">
            <Image
              src="/2.jpg"
              alt="mission"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative  ">
            <Image
              src="/1.jpg"
              alt="mission"
              width={500}
              height={300}
              className="rounded-lg shadow-lg h-[600px]"
            />
          </div>
        </div>
      </div>
      {/* section3 */}

      
    </main>
  );
}
