import ContactForm from "@/components/contactForm";
import Image from "next/image";

export default function ContactPage() {

  return (
    <main className="overflow-x-hidden">
      <section className="relative w-full h-[100vh] md:h-[500px] lg:h-[600px]">
        <Image
          src="/contact.jpg"
          alt="Expertise background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-sm sm:text-base lg:text-lg max-w-4xl font-medium leading-relaxed">
            Have any questions or need more information? We are here to assist you with all your inquiries. Feel free to reach out to us using the contact form below.
          </p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-6 p-6 md:p-12 rounded-xl">
        <div className="w-full md:w-1/2">
          <iframe
            className="w-full h-[600px] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.2484019281994!2d67.00480387514022!3d24.816024477989424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d8ef7525007%3A0x53e44c78887f46a2!2sMarine%20Centre!5e0!3m2!1sen!2s!4v1713512921872!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
