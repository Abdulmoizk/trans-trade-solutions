import ContactForm from "@/components/contactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <div className="relative w-full bg-black mt-[72px] sm:mt-[80px]">
        <div className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px]">
          <Image
            src="/contact.jpg"
            alt="Contact background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-8 sm:py-12 md:py-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Get in Touch with Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl font-medium text-gray-200">
              Have any questions or need more information? We are here to assist you with all your inquiries. Feel free to reach out to us using the contact form below.
            </p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <iframe
                  className="w-full h-[600px] rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.2484019281994!2d67.00480387514022!3d24.816024477989424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d8ef7525007%3A0x53e44c78887f46a2!2sMarine%20Centre!5e0!3m2!1sen!2s!4v1713512921872!5m2!1sen!2s"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
