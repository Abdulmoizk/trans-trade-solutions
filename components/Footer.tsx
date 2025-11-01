import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat"
        style={{ zIndex: 0 }}
      ></div>

      <div className="relative z-10 bg-white py-16 border-t-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            <div>
              <div className="flex justify-center md:justify-start">
                <Link href="/">
                  <Image
                    src="/Logo.svg"
                    alt="TransTradeSolutions"
                    width={112}
                    height={112}
                    className="w-28 h-auto"
                    priority
                  />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-[#ED2228] tracking-tight">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/our-mission", label: "About Us" },
                  { href: "/our-services", label: "Services" },
                  { href: "/careers", label: "Careers" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-700 hover:text-[#ED2228] transition-colors duration-200 font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-[#ED2228] tracking-tight">Contact Us</h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Suite No. L-311, 3rd Floor, Marine Centre, Block 2, Clifton, Karachi, Pakistan
                </p>
                <Link
                  href="mailto:info@transtrade.pk"
                  className="text-sm text-gray-700 hover:text-[#ED2228] transition-colors duration-200 block font-medium"
                >
                  Email: cs@transtrade.pk
                </Link>
                <Link
                  href="tel:+922132313030"
                  className="text-sm text-gray-700 hover:text-[#ED2228] transition-colors duration-200 block font-medium"
                >
                  Contact: +92 329 2574256 (WhatsApp)
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-[#ED2228] tracking-tight">Follow Us</h3>
              <div className="flex justify-center md:justify-start gap-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=61559347383483"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-3 bg-gray-100 rounded-full hover:bg-[#ED2228] hover:text-white text-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/transtradesolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3 bg-gray-100 rounded-full hover:bg-[#ED2228] hover:text-white text-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/trans-trade-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 bg-gray-100 rounded-full hover:bg-[#ED2228] hover:text-white text-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
            <p>&copy; 2024 Trans Trade Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
