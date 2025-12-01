import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Trans Trade Solutions",
  description: "Contact Trans Trade Solutions for all your logistics and supply chain inquiries. Reach us at cs@transtrade.pk or visit our office in Karachi, Pakistan. We're here to help with your shipping needs.",
  keywords: "contact trans trade solutions, logistics inquiry, freight forwarding contact, cs@transtrade.pk, Karachi logistics office",
  openGraph: {
    title: "Contact Us - Trans Trade Solutions",
    description: "Get in touch with our logistics experts for customized supply chain solutions",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* Modern Hero Section */}
      <section className="relative w-full mt-[120px] sm:mt-[128px] min-h-[60vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ED2228]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-block px-4 py-2 bg-[#ED2228]/10 rounded-full border border-[#ED2228]/20">
              <span className="text-sm font-semibold text-[#ED2228] uppercase tracking-wider">Contact Us</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-none tracking-tight">
              Get in Touch
              <span className="block text-[#ED2228] mt-2">With Us</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Have questions or need more information? Our team is here to help. You can reach out to us using the contact form below or directly via email at cs@transtrade.pk. We&apos;re ready to assist you with all your inquiries promptly and professionally.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ED2228]/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Section */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -left-8 -top-8 w-full h-full border-2 border-[#ED2228]/20 rounded-3xl"></div>
              <div className="relative bg-white p-6 rounded-3xl shadow-2xl border border-gray-100">
                <iframe
                  className="w-full h-[600px] rounded-2xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.2484019281994!2d67.00480387514022!3d24.816024477989424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d8ef7525007%3A0x53e44c78887f46a2!2sMarine%20Centre!5e0!3m2!1sen!2s!4v1713512921872!5m2!1sen!2s"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            
            {/* Form Section */}
            <div className="order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
